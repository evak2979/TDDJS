var FlickrFetcher = {
    photoObjToURL: function(photoObj){
        return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/', 
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },
    transformPhotoObj: function(photoObj){
        return{
            title:photoObj.title,
            url:FlickrFetcher.photoObjToURL(photoObj)
        }
    },
    fetchFlickrData: function(apiKey, fakeFetcher){
    if ((fetch == null) && (typeof jQuery !== 'undefined')) 
    {
        fetch = jQuery.getJSON.bind(jQuery);
    }

    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
            + apiKey.toString() + '&text=pugs&format=json&nojsoncallback=1'
            
    return fetch(url);
    },
    fetchPhotos: function(apiKey, fakeFetcher){
        return FlickrFetcher.fetchFlickrData(apiKey, fakeFetcher).then(function(result){
            return result.photos.photo.map(FlickrFetcher.transformPhotoObj);
        })
    }
}

module.exports = FlickrFetcher;