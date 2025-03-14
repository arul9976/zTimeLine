document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById("header");
    const contentClr = document.querySelector(".content._2");
    const timelineBar = document.getElementById('timeline-bar');
    const sideBar = document.querySelector(".sideBar")
    let NowHeight = 0;
    const updateScrollSize = () => {
        window.scrollTo(0, 0)
    }

    console.log(sideBar);
    function updateTimeline() {
        const scrollTop = window.scrollY;
        const zoomFactor = 1.5;
        const scrollSpeed = 1;
        const contentHeight = contentClr.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.5;

        if (contentHeight.top <= triggerPoint) {
            contentClr.classList.add('visible');
        } else {
            contentClr.classList.remove('visible');
        }

        header.style.setProperty('--scale1', `${(zoomFactor + 1) + (scrollTop * scrollSpeed) / 1000}`)
        if ((((zoomFactor - 1) - (scrollTop * scrollSpeed) / 2000) * 6000) > 1480) {
            header.style.setProperty('--transform-Y', `${scrollTop * scrollSpeed}px`)
            header.style.setProperty('--scale', `${((zoomFactor - 1) - (scrollTop * scrollSpeed) / 2000) * 5500}px`)
            header.classList.add('show');
            document.getElementById("top").classList.remove("top")

            header.classList.remove('hidden');

        }


        if ((scrollTop * scrollSpeed) > 200) {

            header.style.setProperty('--brighness', `${((scrollSpeed * scrollTop) / 5) > 100 ? '100' : ((scrollSpeed * scrollTop) / 5)}%`)
        }

        const progressBar = document.createElement('div');
        progressBar.className = 'progress';
        let rangeHeight = window.innerHeight * 0.5;
        if ((sideBar.getBoundingClientRect().top < rangeHeight)) {
            progressBar.style.height = `${(scrollTop - NowHeight)}px`;
            timelineBar.innerHTML = '';

            console.log(rangeHeight, sideBar.getBoundingClientRect().top);
            timelineBar.appendChild(progressBar);
        } else {
            NowHeight = window.scrollY - 10;
            progressBar.style.height = `${0}px`;
            timelineBar.innerHTML = '';
            timelineBar.appendChild(progressBar);

        }


        if (window.innerWidth < 500) {
            timelineBar.style.left = `${document.querySelector(".left").clientWidth + 18}px`

        } else if (window.innerWidth < 650) {
            timelineBar.style.left = `${document.querySelector(".left").clientWidth + 20}px`

        } else if (window.innerWidth < 750) {
            timelineBar.style.left = `${document.querySelector(".left").clientWidth + 20}px`

        }
        else if (window.innerWidth < 1300) {
            timelineBar.style.left = `${document.querySelector(".left").clientWidth + 35}px`
        } else {
            timelineBar.style.left = `calc(50% - 2.5px)`

        }
    }

    window.addEventListener('resize', updateScrollSize);
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);

    updateTimeline();
});
