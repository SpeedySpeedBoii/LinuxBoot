*****************************
The linux boot process
*****************************

1. Overview
#######################################################
| In this document I will introduce the boot process of linux and elaborate on each of it's stages.
| The first document I'll ask you to read goes through the whole boot procss.
| Along the document you'll find lines that are marked with a yellow background,
| These are notes that I added to the document in order to answer questions that ran into my head when I read it.
| I also added notes to some of the other documents that I'll link to.
| Each time I give you a link to an external resource, read/watch it before you continue.
| **Local document path (has my notes):** resources/inside_the_linux_boot_process
| **Online link:** `<https://developer.ibm.com/technologies/linux/articles/l-linuxboot/>`_

2. BIOS and MBR
#######################################################

* | Watch the following video.
  | **Local video path:** resources/BIOS and UEFI As Fast As Possible.mp4
  | **Online link**: `<https://www.youtube.com/watch?v=zIYkol851dU>`_
*   We will assume that our computer has a BIOS. Things are not the same on UEFI.
* | The next document explains the MBR and the BIOS in brief.
  | Some of the details about the BIOS boot process are not very clear (and i marked them as optional) but that's ok, we don't really care about the BIOS.
  | It's just nice to have a general sense of what it does.
  | **Local document path (has my notes):** resources/mbr_and_what_it_does
  | **Online link**: `<http://www.dewassoc.com/kbase/hard_drives/master_boot_record.htm>`_

3. GRUB - GNU GRand Unified Bootloader
#######################################################
* | GRUB's wikipedia page has some exellent information about GRUB's boot process so that's the next document you'll read.
  | Make sure to look at the images that show where the different parts of GRUB are located on the disk.
  | **Local document path:** resources/grub_wikipedia
  | **Online link:** `<https://en.wikipedia.org/wiki/GNU_GRUB>`_
* | To summrize, GRUB is a file system aware bootloader that can load one of multiple kernels that exist on the storage device.
  | GRUB is complex (contains a driver for each of the supported file systems, has an operating system selection menu...),
  | so it obviously can't be stored inside the MBR. This is why GRUB is split into multiple parts, called stages,
  | which chain-load each other. Because grub is aware of the file system, it can load the kernel to RAM
  | right from a kernel image file (instead of remembering the sectors where the kernel is stored on the disk,
  | which may be problematic and hard to maintain). It also reads its own configuartion file right from the file system.

4. Kernel Stage
#######################################################
* | We will only talk in brief about the kernel stage because it does A LOT.
  | First, read the "kernel phase" section in the following wikipedia page.
  | You can also read the "bootloader phase" which introduces bootloaders other than GRUB.
  | **Local document path:** resources/kernel_startup_process_wikipedia
  | **Online link:** `<https://en.wikipedia.org/wiki/Linux_startup_process>`_
* | Now let's learn more about the initial RAM disk.
  | **Local document path:** resources/initial_ramdisk_wikipedia
  | **Online link:** `<https://en.wikipedia.org/wiki/Initial_ramdisk>`_

5. Init Systems
#######################################################
* | We will learn about two init systems.
  | The first one will be the traditional 'sysVinit' which was used by many linux distributions in the past.
  | These days many distributions have adopted 'systemd' which is a more modern init system. So systemd will be the second init system that we will talk about.

5.1 sysVinit
======================================================
* | The is a pdf document about sysVinit. You know what to do.
  | **Local document path:** resources/sysVinit.pdf

A few notes about this document:

1. init has PID 1, not 0 as they say.
2. Just to be sure, I will clearify that only ONE runlevel is initialized at startup. they don't run one after the other.
3. The scripts in /etc/init.d (which are run by '/etc/rc.d/rc') can be run manualy by the user too, either by running them directly, for example: '/etc/init.d/sshd.sh start',
   or by using the service command, for example: 'service sshd start' (or 'service sshd stop', and there are other arguments other than start/stop).
   The files in /etc/rc.d/rcN.d/ (N is the runlevel number), as the document says, are symbolic links to the scripts in init.d.
   So if for example the default runlevel is 3, and there is a file at /etc/rc.d/rc3.d/ called 'S20sshd.sh' which is a symbolic link to /etc/init.d/sshd.sh,
   then rc will run /etc/init.d/sshd.sh with the 'start' argument. If the symbolic link was called 'K20sshd.sh' then rc would run sshd with the 'stop' argument.
4. The file /etc/rc.local is not covered in the document. This is simply a script that runs when any multiuser runlevel is initialized.
   It runs after all the scripts at /etc/rc.d/rcN.d/. This script is made for the system administrator to run additional stuff at startup.
5. If two script files in /etc/rc.d/rcN.d/ have the same number in the name, they will be executed in lexicographical order.
6. 'Kill scripts' exist in /etc/rc.d/rcN.d/ because if the user chooses to switch from one run level to another, some daemons might have to be killed.
7. You can override the default runlevel with a kernel command line parameter (which are parameters that are passed to the kernel by the bootloader as a string).
8. When the kernel finished initializing, it executes /sbin/init as PID 1.
   If your linux installation uses systemd and not sysVinit, then systemd has to run as PID 1, and not /sbin/init.
   In this case, at least in the distributions that I'm familiar with, /sbin/init will be a symbolic link to systemd.

5.1 systemd
======================================================
* | systemd is a collection of programs and libraries that has many features, and it actually does much more than simply execute init scripts.
  | We will learn just enough about systemd to understand its startup procedure.
  | Watch the following video.
  | WARNING: at 18:30-21:50 he talks about 'target units' but he is unclear. That's fine though, you will learn about them later).
  | The video file is too large so I couldn't put it in the repo.
  | **Online video path:** `<https://www.youtube.com/watch?v=r_haLf5mWhE>`_
* | Now let's learn more about systemd units. This document may repeat some of the things that were said in the video.
  | Note that I marked about half of the document as optional.
  | **Local document path (has my notes):** resources/understanding_systemd_units_and_unit_files
  | **Online link:** `<https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files>`_
* | Now let's clearify what a target unit is.
  | Read the 'Targets' section in the following document.
  | **Local document path:** resources/systemd_archwiki
  | **Online link:** `<https://wiki.archlinux.org/index.php/systemd#Targets>`_
* | Now you know enough about systemd to understand what it does after boot, which is explained in the following document.
  | Scroll down and start reading from 'The startup process'.
  | **Local Document path:** resources/systemd_linux_boot_and_startup
  | **Online link:** `<https://opensource.com/article/17/2/linux-boot-and-startup>`_
  | NOTICE: In the document they show how some units run in parallel and some wait for other units to finish before they run,
  | for example, basic.target runs only after sysinit.target is finished.
  | That's because the basic.target unit file sysinit.target in its 'Wants' and 'After' directives.
  | New versions of Ubuntu use systemd, so if you have an Ubuntu machine you can go to /usr/lib/systemd/system or /etc/systemd/system on your own machine and look at the files.
*   You can find a list of other init systemd here: `<https://en.wikipedia.org/wiki/Operating_system_service_management>`_
