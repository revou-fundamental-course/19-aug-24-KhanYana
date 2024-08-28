function replaceName () {
    let name = prompt ("Hi!, Whats your name?", "")
    document.getElementById("name").innerHTML = name
    }

replaceName ();