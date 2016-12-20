var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

var Schema = mongoose.Schema;

var Company = new Schema({
    name  : String
});

var Employee = new Schema({
    name    : String,
    company : Number
});

var modelCompany = mongoose.model('ModelCompany', Company);
var modelEmployee = mongoose.model('ModelEmployee', Employee);

var company_count = 10;
var employee_count = 10 * company_count;

for(var i = 0; i < company_count; i++) {
    var instance = new modelCompany({
	name: 'company_' + i
    });
    instance.save(function(err) {
        if (err) throw err;
    });
}

for(var i = 0; i < employee_count; i++) {
    var instance = new modelEmployee({
	name: 'employee_' + i,
        company: i % company_count
    });
    instance.save(function(err) {
        if (err) throw err;
    });
}

