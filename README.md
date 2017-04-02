# jquery.animator.js with <a href="http://daneden.github.io/animate.css">animate.css</a>
Jquery plugin for <a href="http://daneden.github.io/animate.css">animate.css</a>.

# Demo page
![Jquery for Animator.css](http://i.imgur.com/yB1Eqig.png)
<a href="https://zugoripls.github.io/animate-css-jquery/" title="demo page">https://zugoripls.github.io/animate-css-jquery/</a>.

## Installation
To use [**jquery.animator.js**](https://zugoripls.github.io/animate-css-jquery/") in your project you must firstly need [**Animate.css**](http://daneden.github.io/animate.css) and [**jquery**](https://jquery.com/).

### Download
<a href="https://github.com/zugoripls/animate-css-jquery/archive/master.zip" title="Download zip"><strong>Download</strong></a> in <code>.zip</code>. 

## Basic Usage
<strong>Example to include in your documents.</strong>
```html
<!-- animate.css -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"> 
<!-- animate.css -->
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
<!-- jquery -->
<!-- jquery.animator.js -->
<script src="src/dist/jquery.animator-beta.min.js"></script>
<!-- jquery.animator.js -->
```

<strong>Adding animation to HTML elements.</strong>
At first, you should read how to use <a href="http://daneden.github.io/animate.css">animate.css</a>.

# Animating with <a href="http://daneden.github.io/animate.css">animate.css</a>

<strong>Here are a simple example of how to animate a <code>h1</code> tag.</strong>
```
<h1 class="animated bounceInDown">HELLO WORLD</h1>
```
<strong>Add <code>infinite</code> class to keep animating till to the end of the world.</strong>
```
<h1 class="animated bounceInDown infinite">HELLO WORLD</h1>
```

# Animating with <a href="http://daneden.github.io/animate.css">animate.css</a> + <a href="https://zugoripls.github.io/animate-css-jquery/">jquery.animator.js</a>.

<p>First, add <code>animated</code> class in the element.</p>

```
<!-- HTMl -->
<h1 class="animated" id="greeting">HELLO WORLD</h1>
<!-- HTMl -->
```

<p>Second, add one of the various animator class with the help of <a href="http://daneden.github.io/animate.css">animate.css</a> + <a href="https://zugoripls.github.io/animate-css-jquery/">jquery.animator.js</a> like ...</p>

```
<script>
	$('#title-lg').addAnimation('lightSpeedIn');
</script>
```



