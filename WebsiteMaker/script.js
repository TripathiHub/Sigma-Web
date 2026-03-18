


function addcard(contents,timeDuration,ThumbnailUrl,months,views){
    let container = document.createElement('div');
    container.className="container";
    document.body.appendChild(container);
    let thumbimage = document.createElement('div');
    thumbimage.className="thumbimage";
    container.appendChild(thumbimage);
    let img = document.createElement('img');
    img.className = "thumbnail";
    img.src = ThumbnailUrl;
    thumbimage.appendChild(img);
     let thumbnail = document.createElement('div');
     thumbnail.className="thumbnail";
     thumbimage.appendChild(thumbnail);
    let timebox = document.createElement('div');
    timebox.className="timebox";
    thumbimage.appendChild(timebox);
    timebox.innerHTML=timeDuration;
    let textarea = document.createElement('div');
    textarea.className="textarea";
    container.appendChild(textarea);
    let content = document.createElement('div');
    content.className="content";
    textarea.appendChild(content);
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
    timeperiod.appendChild(view)
    view.innerHTML=orgviews;    
}
    addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","20:56",
    "OIP.webp","3 months ago","120000");
    addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","32:46",
    "OIP.webp","3 months ago","126000");
    addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","08:38",
    "OIP.webp","3 months ago","12000");
    addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","12:07",
    "OIP.webp","3 months ago","1200");
    addcard("Maa Khodal No Tahukar - 2 | Kirtidan Gadhvi | DJ Mix Garba | Nonstop Garba 2016 @StudioSaraswa","14:50",
    "OIP.webp","3 months ago","120000000");