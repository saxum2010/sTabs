# sTabs
Simple plug-in tabs switching

##example:
```
<script type="text/javascript" src="sTab.js"></script>

<div id="tabs-box">
	<ul>
		<li><a href="#tabContent1">Tab1</a></li>
		<li><a href="#tabContent2">Tab2</a></li>
	</ul>
	<div id="tabContent1">
		Some text in first tab
	</div>
	<div id="tabContent1">
		Other text in second tab
	</div>
</div>

<script>
	$("div").sTabs();
</script>
```

##option:

```
$("div").sTabs({
    liClass: "sTabsLi",
    activeClass: "sTabsLiActive",
    contentClass: "sTabsContent"
})
```
- liClass - class for li items
- activeClass - class for active li item
- contentClass - class for tab content item
