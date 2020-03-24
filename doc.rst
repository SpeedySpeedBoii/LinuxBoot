*****************************
The linux boot process
*****************************
TODO: see if you can create links to the local html files. Also see if you can embed the video inside RST.

Overview
#######################################################
| In this document I will introduce the boot process of linux and elaborate on each of it's stages.
| The first document I'll ask you to read goes through the whole boot procss.
| Along the document you'll find lines that are marked with a yellow background, These are notes that I added to the document in order to answer questions that ran into my head when I read it.
| I also added notes to the other documents that I'll link to.
| Each time I give you a link to an external document, read it before you continue.
| **Document local path: resources/inside_the_linux_boot_process**
| Online link (without my notes): `<https://developer.ibm.com/technologies/linux/articles/l-linuxboot/>`_

BIOS and MBR
#######################################################

* | Watch the video "BIOS and UEFI As Fast As Possible.mp4". It can be found in the resources directory.
  | This video can be found on youtube at: `<https://www.youtube.com/watch?v=zIYkol851dU>`_
* | The next document explains in brief about the MBR and the BIOS.
  | Some of the details about the BIOS boot process are not very clear but that's ok, we don't really care about the BIOS.
  | It's just nice to have a general sense of what it does.
  | **Document local path: resources/mbr_and_what_it_does**
  | Online link (without my notes): `<http://www.dewassoc.com/kbase/hard_drives/master_boot_record.htm>`_

TODO: Try to understand the notes after the summary.

TODO: Summerize the important points from the MBR wikipedia page here.
TODO: Talk in brief about GPT: what it is, why it exists, how it looks like in general and how it can coexist with an MBR.

If you want to know more about the MBR and GPT, you can read about them in wikipedia, but it is not required.
The interesting details in the MBR's wikipedia page start at 'Disk partitioning'.

GRUB - GNU GRand Unified Bootloader
#######################################################
* | GRUB's wikipedia page has some exellent information about GRUB's boot process so that's the next document you'll read.
  | Make sure to look at the images that show where the different parts of GRUB are located on the disk.
  | Because this page has many links in it (which will break if I give you a local copy of the page), and because
  | it is pretty easy to understand, i'll let you read it online:
  | https://en.wikipedia.org/wiki/GNU_GRUB

TODO: Talk about other bootloaders.



TODO: initrd and initramfs
