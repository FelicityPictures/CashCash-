console.log('ay');

var f = [['Alabama', '2,729,692,855', '2,778,533,812', '2,907,354,515', '128,820,704', '4.6%'],
         ['Alaska', '415,221,190', '443,305,474', '459,456,905', '16,151,431', '3.6%'],
         ['Arizona', '6,240,921,824', '6,331,475,018', '6,660,082,562', '328,607,543', '5.2%'],
         ['Arkansas', '1,334,901,286', '1,341,283,157', '1,399,488,397', '58,205,240', '4.3%'],
         ['California', '16,727,090,858', '16,986,316,359', '17,839,593,131', '853,276,772', '5.0%'],
         ['Colorado', '2,780,310,307', '2,823,639,422', '2,960,242,697', '136,603,274', '4.8%'],
         ['Connecticut', '1,711,618,674', '1,733,954,117', '1,814,145,288', '80,191,172', '4.6%'],
         ['Delaware', '407,192,096', '411,781,527', '429,616,844', '17,835,317', '4.3%'], 
         ['District of Columbia', '1,667,501,748', '1,691,148,384', '1,774,533,122', '83,384,738', '4.9%'], 
         ['Florida', '8,838,242,094', '8,970,209,787', '9,420,236,534', '450,026,747', '5.0%'], 
         ['Georgia', '5,116,775,394', '5,232,963,351', '5,480,195,644', '247,232,293', '4.7%'], 
         ['Hawaii', '451,938,728', '465,373,544', '486,156,567', '20,783,024', '4.5%'], 
         ['Idaho', '679,848,575', '689,069,254', '721,762,624', '32,693,370', '4.7%'], 
         ['Illinois', '7,468,782,662', '7,565,890,020', '7,920,792,105', '354,902,085', '4.7%'], 
         ['Indiana', '3,883,786,960', '3,942,050,528', '4,133,062,250', '191,011,722', '4.8%'], 
         ['Iowa', '2,421,649,778', '2,458,105,230', '2,580,004,485', '121,899,255', '5.0%'], 
         ['Kansas', '1,499,182,953', '1,535,162,415', '1,602,959,126', '67,796,712', '4.4%'], 
         ['Kentucky', '2,157,388,900', '2,191,333,545', '2,288,729,359', '97,395,814', '4.4%'], 
         ['Louisiana', '2,176,371,686', '2,226,539,538', '2,317,682,179', '91,142,640', '4.1%'], 
         ['Maine', '657,862,987', '667,966,546', '697,091,613', '29,125,067', '4.4%'], 
         ['Maryland', '2,418,011,234', '2,474,338,061', '2,588,626,743', '114,288,683', '4.6%'], 
         ['Massachusetts', '3,951,669,658', '3,999,512,002', '4,177,449,857', '177,937,856', '4.4%'], 
         ['Michigan', '5,169,892,971', '5,226,397,229', '5,453,964,907', '227,567,678', '4.4%'], 
         ['Minnesota', '4,177,294,291', '4,249,364,090', '4,455,262,928', '205,898,837', '4.8%'], 
         ['Mississippi', '1,526,835,506', '1,534,669,038', '1,596,186,049', '61,517,011', '4.0%'], 
         ['Missouri', '3,294,750,597', '3,337,272,994', '3,490,648,005', '153,375,011', '4.6%'], 
         ['Montana', '462,510,255', '473,182,310', '491,284,748', '18,102,439', '3.8%'], 
         ['Nebraska', '1,003,305,339', '1,017,233,573', '1,063,260,655', '46,027,082', '4.5%'], 
         ['Nevada', '817,284,535', '840,995,916', '879,784,715', '38,788,798', '4.6%'], 
         ['New Hampshire', '1,061,902,181', '1,079,881,029', '1,131,047,552', '51,166,523', '4.7%'], 
         ['New Jersey', '3,221,211,543', '3,270,831,061', '3,412,743,379', '141,912,318', '4.3%'], 
         ['New Mexico', '870,351,213', '890,244,684', '923,364,256', '33,119,572', '3.7%'], 
         ['New York', '11,060,352,296', '11,244,715,817', '11,769,150,576', '524,434,760', '4.7%'], 
         ['North Carolina', '4,233,911,581', '4,298,925,410', '4,495,005,149', '196,079,738', '4.6%'], 
         ['North Dakota', '371,487,630', '383,417,023', '398,919,534', '15,502,511', '4.0%'], 
         ['Ohio', '5,656,321,944', '5,765,702,961', '6,017,390,451', '251,687,490', '4.4%'], 
         ['Oklahoma', '1,672,915,795', '1,698,468,372', '1,771,792,052', '73,323,680', '4.3%'], 
         ['Oregon', '2,174,347,203', '2,196,655,197', '2,310,078,761', '113,423,564', '5.2%'], 
         ['Pennsylvania', '7,516,769,179', '7,655,610,320', '8,000,422,678', '344,812,358', '4.5%'], 
         ['Rhode Island', '733,415,223', '739,888,871', '774,475,229', '34,586,358', '4.7%'], 
         ['South Carolina', '2,202,122,274', '2,242,421,377', '2,346,678,756', '104,257,379', '4.6%'], 
         ['SouthDakota', '589,875,982', '605,564,898', '631,240,982', '25,676,084', '4.2%'], 
         ['Tennessee', '3,003,343,838', '3,072,010,193', '3,215,182,868', '143,172,676', '4.7%'], 
         ['Texas', '10,715,679,438', '10,907,383,822', '11,391,023,663', '483,639,841', '4.4%'], 
         ['Utah', '1,549,113,297', '1,560,447,416', '1,641,266,436', '80,819,021', '5.2%'], 
         ['Vermont', '441,804,041', '444,135,177', '466,097,220', '21,962,043', '4.9%'], 
         ['Virginia', '4,286,112,824', '4,356,226,557', '4,565,248,036', '209,021,479', '4.8%'], 
         ['Washington', '2,506,446,629', '2,556,794,449', '2,664,312,795', '107,518,345', '4.2%'], 
         ['West Virginia', '1,262,437,712', '1,261,989,120', '1,320,665,024', '58,675,905', '4.6%'], 
         ['Wisconsin', '2,513,716,861', '2,548,156,063', '2,662,569,831', '114,413,768', '4.5%'], 
         ['Wyoming', '224,185,170', '237,981,240', '246,215,683', '8,234,443', '3.5%'], 
         ['American Samoa', '29,693,158', '30,472,851', '37,766,297', '7,293,446', '23.9%'], 
         ['Guam', '67,639,285', '68,902,231', '73,866,952', '4,964,721', '7.2%'], 
         ['Northern Mariana Islands', '21,489,394', '21,635,863', '25,864,032', '4,228,169', '19.5%'], 
         ['Puerto Rico', '2,202,295,823', '2,214,450,330', '2,321,037,396', '106,587,066', '4.8%'], 
         ['Virgin Islands', '38,713,168', '37,829,364', '37,739,806', '(89,558)', '-0.2%'], 
         ['Freely Associated States', '21,823,489', '21,721,821', '24,020,320', '2,298,499', '10.6%'], 
         ['Indian set-aside', '279,190,804', '287,301,375', '292,751,690', '5,450,315', '1.9%']];

var m=[80,80,80,80];
var width=1000 - m[1] - m[3];
var height=600 - m[0] - m[2];

var testDat = [1,2,3,4,5,6,7,8,9];

var line = d3.svg.line()
    .x(function(d) { //d shall be the number it is on the list
        //console.log(d);
	//console.log("the following is the year");
     //   console.log(d.year);
        return x(d.year);
    })
    .y(function(d) {
//        console.log('pre: ' + d.value.replace(/[^\d\.\-\ ]/g, ''));
	console.log('post: '+ d.value.replace(/[^\d\.\-\ ]/g, ''));
	return y( d.value.replace(/[^\d\.\-\ ]/g, ''));
	//return y( parseFloat( d.value.replace(',' , '') ) );
    });

var x = d3.scale.linear().domain([2015,2017]).range([80, width-80]);
//var x = d3.scale.linear().domain([0,10]).range([80, width-80]);



var y = d3.scale.linear().domain([20000000, 17000000000]).range([height, 80]);


var graph = d3.select('#graph').append('svg:svg')
    .attr('width', width + m[1] + m[3])
    .attr('height', height + m[0] + m[2])
    .append('svg:g')
    .attr('transform','translate(' + m[3] + ',' + m[0] + ')');

var xax = d3.svg.axis().scale(x);
var yax = d3.svg.axis().scale(y).orient("left");

graph.append('svg:g')
//.attr('class','x axis')
    .attr('transform', 'translate(0,' + height+')')
    .call(xax);
//graph.append('svg:g').call('xax');

/*var yax = d3.svg.axis().scale(y);*/
graph.append('svg:g')
    //.attr('class', 'y axis')
    .attr('transform', 'translate(' + m[1] + ',' + 0+')') 
    .call(yax);
//graph.append('svg:g').call('yax');*/

var States = [];
for(var i=0;i<f.length;i++){
    var StateData = [{
	      "value": f[i][1],
    	  "year": "2015"
    }, {
    	  "value": f[i][2],
    	  "year": "2016"
    }, {
    	  "value": f[i][3],
    	  "year": "2017"
    }];
    States.push(StateData);
}
//console.log(States.length);
// States is an ARRAY of DICTIONARIES

function graphState(i) {
    d3.select('#state').remove();
    graph.append('svg:path').attr('d', line(States[i])).attr('id', 'state');
    console.log('AYY');
    console.log('State: '+f[i][0]);
}

//////////HERE IS THE GRAPH ALL
/*for (var i = 0; i < States.length; i++){
  for (var i2 = 0; i2<3; i++){
  graph.append('svg:path').attr('d', line(States[i]));
  }
  }*/
/*for (var i = 0; i < States.length; i++){
  graph.append('svg:path').attr('d', line(States[i]));
  }*/

//  graph.append('svg:path').attr('d', line(testDat));
//graph.append('svg:path').attr('d', line(f[0]));

//graphState(0);
/*var currentState="Alabama";
graphState(0);

var currentState="Alabama";
function addStateNames(){
    var s = document.getElementById("stateNames");
    for(var i=0;i<f.length;i++){
	      var n = document.createElement("li");
        var txt=f[i][0];
	      n.innerHTML=txt;
	      s.appendChild(n);
        n.addEventListener('click',function(d){
	    
            currentState=txt;
            console.log(currentState);
        n.setAttribute("id",txt);
        var t = document.getElementById(txt);
        t.addEventListener('click',function(d){
            console.log(t.innerHTML);
        });
    }
}*/


//THIS IS THE THING THAT MAKES THE LIST OF STATES
var statez=d3.select('#stateNames').selectAll('div').data(f)
    .enter().append('div')
    .text(function(d, i) {
	return f[i][0];
    })
    .on('click', function(d, i) {
	graphState(i);
    });
	
//addStateNames();

var stateIndex = 0;
window.addEventListener('scroll', function(e) {
    if (stateIndex<=50) {
	      stateIndex++;
	      graphState(stateIndex);
    }
});


/*function updateSub(){
    var s =  document.getElementById("sub");
    s.innerHTML=currentState;
}
updateSub();
*/
