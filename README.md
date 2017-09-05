## Usage ##

Click on random quotes to generate random quotes from the Game of Thrones API.

Click on specific characters to see their quotes.

Delete characters, if you don't want to see their face (*cough* Cersei *cough*).

## Installation ##

```shell
git clone https://github.com/lucketta/got-quote-generator.git
cd got-quote-generator
bundle install
rails db:migrate
rails db:seed
cd client
npm install
```

Then `rake start` to start both servers.
