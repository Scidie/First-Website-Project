####The object-fit property can have the following values:

* **fill** - This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit
* **contain** - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box
* **cover** - The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit
* **none** - The replaced content is not resized
* **scale-down** - The content is sized as if none or contain were specified (would result in a smaller concrete object size)

####letter-spacing

    Defines the spacing between the characters of a block of text.
    
    defaultletter-spacing: normal;
    
    The spacing between the characters is normal.
    
    The quick brown fox jumps over the lazy dog
    letter-spacing: 2px;
    
    You can use pixel values.
    
    The quick brown fox jumps over the lazy dog
    letter-spacing: 0.1em;
    
    You can use em values: this allows the spacing to remain relative to the font-size.
    
