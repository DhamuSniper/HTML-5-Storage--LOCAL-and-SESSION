# HTML-5-Storage--LOCAL-and-SESSION
HTML 5 provide storage specifiers LOCAL storage and SESSION storage. Readme clearly explains the concept of Local and Session storage from HTML 5.


STEP 1: SIGN UP FIRST(remember the credentials)(now stored in localStorage ---you can check by(Chrome) -->DeveloperConsole-->Application-->LocalStorage
STEP 2: LOGIN NOW 
STEP 3: CAUTION ...ALERT ...When you click this ALL DATA IN LOCAL STORAGE WILL BE DELETED!!



HTML 5 has a feature of storage specifiers as LocalStorage, SessionStorage and WebSQL. 

----------Intro----------
Local storage and Session storage stores the data in Key-Value pair format. They are similar in functionality but the difference between them is
local storage is non-volatile until you clear it. You gotta clear it manualy from your code. But while the session storage is volatile and it 
gotta cleared while user closes the window or tab where it was active. sessionStorage or localStorage is specific to the protocol of the page.

LOCAL STORAGE:_____________________________

localStorage.setItem(key,value)--------> It stores the value as Key-value pair.

localStorage.getItem(Key)--------------> It get you the value with help of key.

localStorage.removeItem(key)-----------> It removes the particular key-value pair using Key name.

localStorage.clear()-------------------> It clear out the entire local storage( Note that local storage will not be cleared from your browser
                                         until you clear it manually)
                                         
SESSION STORAGE:____________________________

The sessionStorage property allows you to access a session Storage object for the current origin.

sessionStorage.setItem(key,value)
sessionStorage.getItem(key)
sessionStorage.removeItem(key)
sessionStorage.clear()

the only difference is while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores.

Now you know the Difference.

THANKS #MDN #GOOGLE nd Everyone!

