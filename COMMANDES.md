sudo apt install php-cli
docker exec --user $UID -ti formulaires_web_1 bash
docker-compose up -d
wget https://get.symfony.com/cli/installer -O - | bash
mv /home/laurent/.symfony/bin/symfony /usr/local/bin/symfony
sudo mv /home/laurent/.symfony/bin/symfony /usr/local/bin/symfony
symfony serve -d --allow-http
cd 
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php --install-dir=bin --filename=composer
php composer-setup.php --install-dir=/bin --filename=composer
sudo php composer-setup.php --install-dir=/bin --filename=composer
php -r "unlink('composer-setup.php');"
cd -
sudo apt install php-xml
sudo apt install php-curl
sudo apt install php-pgsql
sudo apt install php-mysql
sudo apt install npm
composer update
npm install --force
<!-- php bin/console make:docker:database -->
<!-- docker-compose up -d -->
cp .env.adsl .env.local
docker-compose -f docker-compose.adsl.yaml --env-file ./.env.local up -d

COMPOSER=composer.adsl.json composer update
php bin/console do:da:cre
php bin/console do:mi:mi
php bin/console do:fi:lo
<!-- symfony serve --allow-http -d -->
npm install
npm run watch
