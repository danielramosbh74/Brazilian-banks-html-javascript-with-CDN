# Brazilian-banks

The goal of this code (maybe an API) is a JSON response similiar to this:

```
{
  "ispb_code": "00000000",
  "name": "Banco do Brasil S.A.",
  "number_code": "001",
  "short_name": "BCO DO BRASIL S.A."
}

```

## It was based on

1. An official list of Brazilian banks made available by the Central Bank: https://www.bcb.gov.br/pom/spb/estatistica/port/ASTR003.pdf
2. The very useful [Francisco Presencia - Drive-db](https://github.com/franciscop/drive-db)
3. A public Google Spreadsheet that I've done based on the official list: https://docs.google.com/spreadsheets/d/1X__ohDkOorMS0NHCjyEILo7PoBedMAKxSg3vOiubl8w/edit?usp=sharing

**Please, don't ask me to edit this spreadsheet**, it's published only to visualization, because it's only an example and today it's working to generate the json database.

**It's the first version of a pure JavaScript without frameworks**, so we have a lot of things to improve it, but, I think it's harder to start anything...

I've done this the most simple as I could, having only "Francisco Presencia - Drive-db" CDN as a dependency, because **I do believe** _simple things works much better_... 


## Run

It's hosted here as static files using Github Pages, so you just need to click on this link below:

https://danielramosbh74.github.io/Brazilian-banks-html-javascript-with-CDN/index.html


