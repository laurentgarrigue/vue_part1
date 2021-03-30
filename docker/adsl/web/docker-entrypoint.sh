#!/bin/bash

#droits sur cache de symfony
[ -d var ] && setfacl -dR -m u:www-data:rwX -m u:developpeur:rwX var
[ -d var ] && setfacl -R -m u:www-data:rwX -m u:developpeur:rwX var

rm -f /var/run/apache2/apache2.pid # Suppression ancien pid residuel (peut bloquer le lancement d'apache sinon)
/usr/sbin/apache2ctl -D FOREGROUND # Lancement d'apache