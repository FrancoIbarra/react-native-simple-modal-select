# React Native Simple Modal Select

A simple and searchable modal selector for React Native.

## Props

-   `data - []` required, array of objects that will be passed to the picker, with unique key and label.
-   `labelName - string` required, name of your object property that will be used for displaying text.
-   `valueName - string` required, name of your object property that will be used as option value.
-   `visible - boolean` required, prop used to show/hide the component.
-   `transparent - boolean` optional, backdrop transparency, true by default.
-   `searchable - boolean` optional, used for showing/hiding the search input, false by default.
-   `onItemPress - function` required, callback function fired when the user selects an item.
-   `cancelText - string` optional, text of 'cancel' button.
-   `cancelCallback - function` required, callback for the onPress event of the cancel button and the onRequestClose event of the modal.
-   `searchPlaceHolder - string` optional, placeholder text of the search input.
-   `noResultsText - string` optional, text showed when there are no search results.

## License

This package is licensed under [The MIT License (MIT)](LICENSE).
