let _slides = document.querySelectorAll('body>div>.slide')
        let counter = 0
        function previous() {
            if (counter <= 4 && counter >= 1) {
                _slides[counter].style.transform = 'translateX(-100%)'
                counter -= 1
                _slides[counter].style.transform = 'translateX(0)'
            }
        }
        function next() {
            if (counter <= 3 && counter >= 0) {
                _slides[counter].style.transform = 'translateX(100%)'
                counter += 1
                _slides[counter].style.transform = 'translateX(0)'
            }
        }