#SIMPLE URL SHORTENER

GUI: https://gentle-retreat-59436.herokuapp.com/

I can POST a URL to https://gentle-retreat-59436.herokuapp.com/api/shorturl/new and I will receive a shortened URL in the JSON response.

Example : {"original_url":"www.google.com","short_url":1}

If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}

When I visit the shortened URL, it will redirect me to my original link.
