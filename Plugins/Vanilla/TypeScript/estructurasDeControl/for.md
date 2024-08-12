### ==================================== ###
###### ===--- Estructura (for) ---=== ######
### ==================================== ###

<!-- Imaginemos que tenemos una estructura HTML. -->

```html
	<ul>
		<li>Uno</li>
		<li>Dos</li>
		<li>Tres</li>
	</ul>
```

<!-- Manejando el tipado seria de esta manera. -->

```ts
	const collection:HTMLCollectionOf<Element> = document.getElementsByTagName('li') as HTMLCollectionOf<Element>;

	//Recorre y guardan el elemento del array u objeto.
	for(let li:HTMLElement of collection) console.log(li);

	//Recorre y guardan el índice del elemento del array u objeto.
	for(let i:number in collection){
		collection[i] as HTMLElement;
	}
```