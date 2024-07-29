# --------------------- #
# ------ opacity ------ #
# --------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                opacity: {
                    '10': '0.1',
                    '50': '0.5',
                    '75': '0.75'
                }
            }
        }
    }
```

```html
    <div class="opacity-10">
        <!-- El elemento tendrá una opacidad del 10% -->
    </div>

    <div class="opacity-50">
        <!-- El elemento tendrá una opacidad del 50% -->
    </div>

    <div class="opacity-75">
        <!-- El elemento tendrá una opacidad del 75% -->
    </div>
```