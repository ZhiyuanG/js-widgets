(function() {
    var Calendar =  function(selector, options) {
        const defaultOpts = {
            width: 300,
            height: 200
        };

        const el = document.getElementById(selector);
        if (!(el instanceof HTMLElement)) return;
        el.style.width = defaultOpts.width + "px";
        el.style.height = defaultOpts.height + "px";
        el.className = "calendar";

        const header = document.createElement('div');
        header.style.height = defaultOpts.height * 0.3 + "px";
        header.style.backgroundColor = "#1abc9c";
        header.className = "header";

        const headerUl = document.createElement('ul');
        const prev = document.createElement('li');
        prev.className = "prev";
        prev.innerHTML = '&#10094;';

        const next = document.createElement('li');
        next.className = "next";
        next.innerHTML = '&#10095;';

        const title = document.createElement('li');
        title.innerHTML = "Janary";
        
        headerUl.appendChild(prev);
        headerUl.appendChild(next);
        headerUl.appendChild(title);

        header.appendChild(headerUl);

        const weekdays = document.createElement('div');
        weekdays.style.height = defaultOpts.height * 0.15 + "px";
        weekdays.style.backgroundColor = "#ddd";
        weekdays.className = "weekdays";

        const weekdayNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
        const weekdayList = document.createElement('ul');
        for (var i = 0; i < 7; ++i) {
            let w = document.createElement("li");
            w.innerHTML = "<span>"+weekdayNames[i]+"</span>";
            weekdayList.appendChild(w);
        }
        weekdays.appendChild(weekdayList);

        const days = document.createElement('div');
        days.style.height = defaultOpts.height * 0.55 + "px";
        days.style.backgroundColor = "#eee";

        var date = new Date();
        console.log(date.getDay());

        el.appendChild(header);
        el.appendChild(weekdays);
        el.appendChild(days);
    };

    window.calendar = Calendar;
}());