FROM debian:buster

LABEL maintainer=STI
ARG DEVUID
ARG SOURCELIST1
ARG SOURCELIST2

#creation d'un utlisateur avec l'UID du développeur
RUN useradd -ms /bin/bash developpeur --uid ${DEVUID}

# Modification sources.list pour accès dépots MI
# RUN  echo ${SOURCELIST1} >  /etc/apt/sources.list \
#     && echo ${SOURCELIST2} >>  /etc/apt/sources.list \ 
#     && apt-get update -y \
#     && apt-get upgrade -y
RUN apt-get update -y && apt-get upgrade -y

#ENV FR
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y locales && \
    sed -i -e 's/# fr_FR.UTF-8 UTF-8/fr_FR.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    locale-gen && \
    update-locale LANG=fr_FR.UTF-8 && \
    update-locale LC_ALL=fr_FR.UTF-8

ENV LANG fr_FR.UTF-8

# Installation apache, php...
RUN apt-get install -y apache2 php libapache2-mod-php php-mysql php-pgsql php-xml php-intl php-mbstring php-curl \
    git wget acl nano mailutils msmtp \
    zip -y \
    msmtp msmtp-mta

# configuration de mailcatcher
# COPY php.ini /etc/php/7.0/apache2/php.ini
COPY msmtprc /etc/msmtprc
RUN chmod 777 /etc/msmtprc
RUN touch /var/log/msmtp.log
RUN chmod 777 /var/log/msmtp.log

# Récupération et paramétrage de composer
RUN wget --no-check-certificate https://getcomposer.org/composer-stable.phar && mv composer-stable.phar /usr/local/bin/composer

RUN chmod +x /usr/local/bin/composer

# Ouverture du port
EXPOSE 80
EXPOSE 25

#Dossier de travail par défaut
WORKDIR /var/www/html

# entrypoint pour le cache de symfony (droits sur le dossier var)
# puis lanchement apache
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
# backwards compat
RUN ln -s usr/local/bin/docker-entrypoint.sh /
ENTRYPOINT ["docker-entrypoint.sh"]

#Activation du module Header
RUN a2enmod headers expires rewrite

# Suppression ancien pid residuel et Lancement d'apache
#CMD rm -f /var/run/apache2/apache2.pid && /usr/sbin/apache2ctl -D FOREGROUND
