mount -t vfat -o rw,remount /dev/mtdblock13 /opt1/dict  >> /Data/PRSPInstaller/install.log 2>&1
rm -R /opt1/dict/prsp >> /Data/PRSPInstaller/install.log 2>&1

#To uninstall PRS+ comment the next line (put # in the beginning of the line)
cp -r /Data/PRSPInstaller/prsp /opt1/dict  >> /Data/PRSPInstaller/install.log 2>&1

mount -t vfat -o ro,remount /dev/mtdblock13 /opt1/dict  >> /Data/PRSPInstaller/install.log 2>&1