# Notes on GitHub Pages, Jekyll and Co

[GitHub Pages](https://pages.github.com/) works great to generate simple websites for repositories or the user/organization root site by converting Markdown documents (serverside) with [Jekyll](http://jekyllrb.com/docs/github-pages/). It is possible to modify and tweak all settings (see the [basic intro](https://help.github.com/articles/using-jekyll-with-pages/)), but this becomes painful quickly.

## Getting started: Poole

[Poole](https://github.com/poole/poole) is a ready-to-use template that I can simply fork into a new repository (or download / push) and works both for the root page as well as project pages (requires modifying the `baseurl` in `_config.yaml`). It comes with basic theme support and is very [straightforward to modify](http://joshualande.com/jekyll-github-pages-poole/). 

[Installing Jekyll locally](https://help.github.com/articles/using-jekyll-with-pages/) makes the development easier as it serves pages through <http://localhost:4000> after a simple `jekyll serve` in the repo directory.

## More info

There are a couple of decent intros on how to get started with Jekyll in the `gh-pages` branch of a repo, e.g., this one from [24ways](http://24ways.org/2013/get-started-with-github-pages/), although the default Jekyll install now is pretty decent. One can also go [down the rabbit hole](http://erjjones.github.io/blog/How-I-built-my-blog-in-one-day/)

## Jekyllbootstrap

An improved scaffold over the default Jekyll starting page or the Poole framework is [Jekyllbootstrap](http://jekyllbootstrap.com/) which comes with a number of templates, minimizing the amount of work that I'd have to do writing my own templates with Liquid. The default theme is Twitter Bootstrap, but there [are plenty others](http://themes.jekyllbootstrap.com/). Drawback: no longer under active development, and the canned themes are all so-so. It's also overkill for our needs (social media, comments, blog support, etc.). Might come in handy when developing the course website.

## Themes

Number of websites around. On the single-page static website front [SinglePaged](https://github.com/t413/SinglePaged) is what I am trying, though others such as [Solo](http://solo.chibi.io/) are looking good, too. Following the instructions for a new project repository worked well. Code is currently in [themeTest](https://github.com/ohofmann/themeTest) published to [Pages](https://github.com/ohofmann/themeTest). The template can bring in icons from [FA](http://fortawesome.github.io/Font-Awesome/icons/) but I've went with variations of the images we've used before (found in `./img`). Added a `_resources` directory that contains the Keynote document used to generate the images along with the color scheme.

There area number of other simple tricks such as inline color and font changes. See [this site](http://magiciansanfrancisco.com/) ([GitHub source code](https://github.com/strongrobert/MagicianSanFrancisco)) for some examples.

## ToDo

* Replace text
* http://prose.io/#about, https://github.com/prose/prose/wiki/Prose-Configuration and https://github.com/prose/starter
* Read up on [CNAME](http://in-the-attic.com/2013/01/04/building-a-blog-using-jekyll-bootstrap-and-github-pages-a-beginners-guide/)
* Work through [Jekyll docs](http://jekyllrb.com/)


