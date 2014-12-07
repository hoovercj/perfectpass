Contributing to PerfectPass.org
=======================

All the data is managed through a series of [Yaml][yaml] files so it may be
useful to read up on the Yaml syntax.

To add a new site, go to the [data files](_data/) and get familiar with how it
is setup. There is a section and coresponding file for each Category and they
all follow this syntax:

## External Documents

We have the following external document for gathering information and ideas for moving forward: https://docs.google.com/a/codyhoover.com/document/d/1yRO_ABZ7XYX8UJJyQIQx69f2wYB5R0pKfmyYsKrz6xw/edit?usp=sharing

## Guidelines

1. **Don't break the build**: We have a simple continuous integration system
   setup with [Travis][travis]. If your pull request doesn't pass, it won't be
   merged.

   To manually test the build, just run the following:

    ```bash
    $ ruby verify.rb
    ```

2. **Use a Nice Icon**: The icon must be 32x32 in dimension. Earlier we were
   using 16x16 but upgraded for various high density screens.
3. **Be Awesome**: You need to be awesome. That is all.

## Running Locally

It's easy to run everything locally to test it out. Either you can have plain
[Jekyll][jekyll] installed or you can use [Bundler][bundler] to manage
everything for you.

### Using Bundler

1. To install Bundler, just run `gem install bundler`.
2. Install dependencies in the [Gemfile][gemfile], `bundle install`.
3. Run Jekyll: `bundle exec jekyll serve --watch`. The `--watch` is optional and
   makes Jekyll watch for file changes.

### Using Vanilla Jekyll

1. Install Jekyll if you don't already have it: `gem install jekyll`.
2. Run Jekyll: `jekyll serve --watch`. The `--watch` is again optional.

## Site Criteria

The following is a rough criteria and explanations for what sites should be on
PerfectPass.org. If one of the following Criteria is met, it belongs on PerfectPass.org:

1. **Personal Info/Image**: Any site that deals with personal info or a person's
   image. An example of a site with **Personal Info** would be their Amazon
   account and a site regarding **Personal Image** would be one like Twitter.
2. **Data**: This means data that is either important or sensitive. It also is
   any data relating to Criteria 1.
3. **Money**: Any site that deals with money.
4. **Control**: This is a more general Criteria that includes sites that give
   access to things that might infringe upon Criteria 1, 2, and 3. An example of
   this is a site that allows remote access.

If you have any questions regarding whether or not a site matches one of the
Criteria, just open an Issue and we'll take a look.

### Excluded Sites

A list for excluded sites has also been created to ensure sites that have been
removed don't get re-added. The list also contains the reason for its removal.

View the complete list in the [EXCLUSION.md file][exclude].

## New Sections

To add a new section, modify the `sections` value in [main.yml](_data/main.yml)
and follow the template below:

```yml
sections:
  - id: category-id
    title: Category Name
    icon: icon-class
```

Then create a new file in the `_data` directory named the same as your section's
id with the `.yml` extension.

## New Sites

First and foremost, make sure the new site meets our [definition
requirements](#a-note-on-definitions) for Two Factor Auth.

The values should be pretty straight forward for adding a new website. The
`websites` array should already be defined, just add a new website to it like
this example:

```yml
websites:
  - name: Site Name
    url: https://www.site.com/
    twitter: SiteTwitter
    img: site.png
```
Fields `name:`, `url:`, `img:` are required for all entries. If available, `twitter:` should be included.


### Pro Tips

- See Guideline #2 about icons. The png file should go in the corresponding
  `img/section` folder.

- For the sake of organization and readability, it is appreciated if you insert
  new sites alphabetically and that your site chunk follow the same order as the
  example above.

## A Note on Definitions

TODO

### New Password Managers

Rather than split out password managers on the main page, we elected to keep the main
page clean and add another page dedicated to password managers.

To add a new provider simply add to the `managerss.yml` file, marking `free` or `paid`
where appropriate.

```yml
  - name: Company Name
    url: https://example.com
    img: company.png
```

[exclude]: /EXCLUSION.md
[bundler]: http://bundler.io/
[gemfile]: /Gemfile
[jekyll]: http://jekyllrb.com/
[travis]: https://travis-ci.org/hoovercj/passwordpolicies
[yaml]: http://www.yaml.org/
