// Immediately invoked functions Epressions


// syntax ---->

//--->   () ()    // --> ';' semicolon is required to end its scope execution after 2nd braces
        // /    \
        // used | Used to execute function
        // to   |
        // define functions |

( function addone() {
    console.log("DB connected")
})();

( (name) => {
    console.log(`DB Connected ${name}`);
})('nikhil')


