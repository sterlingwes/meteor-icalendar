Package.describe({
    summary: "iCal (CalDav) parser & generator"
});
Npm.depends({icalendar: "0.6.5"});

Package.on_use(function(api){
    api.add_files('icalendar.js', 'server');
    if(api.export)
        api.export('icalendar');
});