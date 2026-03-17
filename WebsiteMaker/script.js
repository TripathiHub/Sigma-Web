


function addcard(contents,timeDuration,ThumbnailUrl,months,views){
    let container = document.createElement('div');
    container.className="container";
    document.body.appendChild(container)
    container.appendChild(thumbimage)
    let img = document.createElement('img');
    img.className = "thumbnail";
    img.src = ThumbnailUrl;
    let thumbnail = document.createElement('div');
    thumbnail.className="thumbnail";
    thumbimage.appendChild(thumbnail)
    let timebox = document.createElement('div');
    timebox.className="timebox";
    thumbimage.appendChild(timebox);
    timebox.innerHTML=timeDuration;
    let textarea = document.createElement('div');
    textarea.className="textarea";
    container.appendChild(textarea);
    let content = document.createElement('div');
    content.className="content";
    textarea.appendChild(content)
    content.innerHTML=contents;
    let timeperiod = document.createElement('div');
    timeperiod.className="timeperiod";
    textarea.appendChild(timeperiod);
    let month = document.createElement('div');
    month.className="month";
    timeperiod.appendChild(month)
    month.innerHTML=months;
    views = Number(views);
    let orgviews;
    if(views>=1000000){
        views = views/1000000;
        orgviews=views+"m";
    }
    else if(views>=1000){
         views=views/1000;
        orgviews=views+"k";
    }
    else{
          orgviews=views;
    }
    let view = document.createElement('div');
    view.className="views";
    timeperiod.appendChild(views)
    view.innerHTML=orgviews;    
}
 addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","20:56",
    "https://www.bing.com/ck/a?!&&p=bf1592d7a305e7f9feb87ed5df267c79e0fe5c7a20f68ad93c114ab812aef500JmltdHM9MTc3MzcwNTYwMA&ptn=3&ver=2&hsh=4&fclid=133fedcd-e677-6251-34e5-fbfae2776c2d&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZStnYXJiYSZpZD1DQkZCRTU3NzRGREFBNzlGRTZERENGRTQ1MzUzNjI5RkEzNTc2RjlGJkZPUk09SVFGUkJB"
,"3 months ago","120000");