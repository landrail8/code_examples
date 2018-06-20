$(function(){

	var $rootDiv = $('#root');
	var $rootImage = $('#currentQuestionImage');
	var $rootError = $('#errorRoot');
	var resultArr = [];
	var resultForCanvas = [];
	var questionText = ["ÐšÑ‚Ð¾ ÑÑ‹Ð³Ñ€Ð°ÐµÑ‚ Ð² Ñ„Ð¸Ð½Ð°Ð»Ðµ?", "ÐšÑ‚Ð¾ ÑÑ‚Ð°Ð½ÐµÑ‚ Ñ‡ÐµÐ¼Ð¿Ð¸Ð¾Ð½Ð¾Ð¼ Ð¼Ð¸Ñ€Ð°?", "ÐšÑ‚Ð¾ Ð·Ð°Ð¹Ð¼ÐµÑ‚ 3 Ð¼ÐµÑÑ‚Ð¾?", "ÐšÑ‚Ð¾ ÑÑ‚Ð°Ð½ÐµÑ‚ Ð»ÑƒÑ‡ÑˆÐ¸Ð¼ Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð¼ Ð¿Ð¾ Ð²ÐµÑ€ÑÐ¸Ð¸ Ð¤Ð˜Ð¤Ð?", "ÐšÐ°Ðº Ð²Ñ‹ÑÑ‚ÑƒÐ¿Ð¸Ñ‚ ÑÐ±Ð¾Ñ€Ð½Ð°Ñ Ð Ð¾ÑÑÐ¸Ð¸?", "ÐšÑ‚Ð¾ ÑÑ‚Ð°Ð½ÐµÑ‚ Ð»ÑƒÑ‡ÑˆÐ¸Ð¼ Ð±Ð¾Ð¼Ð±Ð°Ñ€Ð´Ð¸Ñ€Ð¾Ð¼?", "Ð—Ð°Ð¿Ð»Ð°Ñ‡ÐµÑ‚ Ð»Ð¸ ÐšÑ€Ð¸ÑˆÑ‚Ð¸Ð°Ð½Ñƒ Ð Ð¾Ð½Ð°Ð»Ð´Ñƒ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¼Ð°Ñ‚Ñ‡ÐµÐ¹ Ñ‡ÐµÐ¼Ð¿Ð¸Ð¾Ð½Ð°Ñ‚Ð° Ð¼Ð¸Ñ€Ð°?", "Ð’Ñ‹Ð±ÐµÐ¶Ð¸Ñ‚ Ð»Ð¸ Ð¾Ð±Ð½Ð°Ð¶ÐµÐ½Ð½Ñ‹Ð¹ Ð±Ð¾Ð»ÐµÐ»ÑŒÑ‰Ð¸Ðº(Ñ†Ð°) Ð½Ð° Ð¿Ð¾Ð»Ðµ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¼Ð°Ñ‚Ñ‡Ð°?"];

	var countriesList = [
		{
			"name" : "Ð•Ð³Ð¸Ð¿ÐµÑ‚",
			"pic" : "egypt"
		},
		{
			"name" : "ÐœÐ°Ñ€Ð¾ÐºÐºÐ¾",
			"pic" : "morocco"
		},
		{
			"name" : "ÐÐ¸Ð³ÐµÑ€Ð¸Ñ",
			"pic" : "nigeria"
		},
		{
			"name" : "Ð¡ÐµÐ½ÐµÐ³Ð°Ð»",
			"pic" : "senegal"
		},
		{
			"name" : "Ð¢ÑƒÐ½Ð¸Ñ",
			"pic" : "tunisia"
		},
		{
			"name" : "ÐÐ²ÑÑ‚Ñ€Ð°Ð»Ð¸Ñ",
			"pic" : "australia"
		},
		{
			"name" : "Ð˜Ñ€Ð°Ð½",
			"pic" : "iran"
		},
		{
			"name" : "Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° ÐšÐ¾Ñ€ÐµÑ",
			"pic" : "korea"
		},
		{
			"name" : "Ð¡Ð°ÑƒÐ´Ð¾Ð²ÑÐºÐ°Ñ ÐÑ€Ð°Ð²Ð¸Ñ",
			"pic" : "saudi-arabia"
		},
		{
			"name" : "Ð¯Ð¿Ð¾Ð½Ð¸Ñ",
			"pic" : "japan"
		},
		{
			"name" : "ÐÐ½Ð³Ð»Ð¸Ñ",
			"pic" : "england"
		},
		{
			"name" : "Ð‘ÐµÐ»ÑŒÐ³Ð¸Ñ",
			"pic" : "belgium"
		},
		{
			"name" : "Ð“ÐµÑ€Ð¼Ð°Ð½Ð¸Ñ",
			"pic" : "germany"
		},
		{
			"name" : "Ð”Ð°Ð½Ð¸Ñ",
			"pic" : "denmark"
		},
		{
			"name" : "Ð˜ÑÐ»Ð°Ð½Ð´Ð¸Ñ",
			"pic" : "iceland"
		},
		{
			"name" : "Ð˜ÑÐ¿Ð°Ð½Ð¸Ñ",
			"pic" : "spain"
		},
		{
			"name" : "ÐŸÐ¾Ð»ÑŒÑˆÐ°",
			"pic" : "poland"
		},
		{
			"name" : "ÐŸÐ¾Ñ€Ñ‚ÑƒÐ³Ð°Ð»Ð¸Ñ",
			"pic" : "portugal"
		},
		{
			"name" : "Ð Ð¾ÑÑÐ¸Ñ",
			"pic" : "russia"
		},
		{
			"name" : "Ð¡ÐµÑ€Ð±Ð¸Ñ",
			"pic" : "serbia"
		},
		{
			"name" : "Ð¤Ñ€Ð°Ð½Ñ†Ð¸Ñ",
			"pic" : "france"
		},
		{
			"name" : "Ð¥Ð¾Ñ€Ð²Ð°Ñ‚Ð¸Ñ",
			"pic" : "croatia"
		},
		{
			"name" : "Ð¨Ð²ÐµÐ¹Ñ†Ð°Ñ€Ð¸Ñ",
			"pic" : "switzerland"
		},
		{
			"name" : "Ð¨Ð²ÐµÑ†Ð¸Ñ",
			"pic" : "sweden"
		},
		{
			"name" : "ÐšÐ¾ÑÑ‚Ð°-Ð Ð¸ÐºÐ°",
			"pic" : "costa-rica"
		},
		{
			"name" : "ÐœÐµÐºÑÐ¸ÐºÐ°",
			"pic" : "mexico"
		},
		{
			"name" : "ÐŸÐ°Ð½Ð°Ð¼Ð°",
			"pic" : "panama"
		},
		{
			"name" : "ÐÑ€Ð³ÐµÐ½Ñ‚Ð¸Ð½Ð°",
			"pic" : "argentina"
		},
		{
			"name" : "Ð‘Ñ€Ð°Ð·Ð¸Ð»Ð¸Ñ",
			"pic" : "brazil"
		},
		{
			"name" : "ÐšÐ¾Ð»ÑƒÐ¼Ð±Ð¸Ñ",
			"pic" : "colombia"
		},
		{
			"name" : "ÐŸÐµÑ€Ñƒ",
			"pic" : "peru"
		},
		{
			"name" : "Ð£Ñ€ÑƒÐ³Ð²Ð°Ð¹",
			"pic" : "uruguay"
		}
	];

	var currentQuestionId = 0;
	var $nextBtn = $('.nextButton');
	var $startBtn = $('.startButton');

	function checkWpHeight() {
		var windowHeight = $(window).height();
		$rootDiv.css('height', windowHeight);
	}

	function isValid() {
		var $checkedInputs = $('#question' + currentQuestionId).find('input:checked');
		if (currentQuestionId === 1 && $checkedInputs.length < 2) {
			errorMessage('Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð°');
			return false;
		}
		if (!$checkedInputs.length) {
			errorMessage('Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚ Ð¾Ñ‚Ð²ÐµÑ‚Ð°.');
			return false;
		}
		return true;
	}

	function errorMessage(message) {
		$rootError.fadeIn().text(message);
	}

	function checkboxLimit() {

		$('#question1 .input-checkbox').change(function(){
	    	var max = 2;

	    	if ( $("#question1 .input-checkbox:checked").length == max ) {
	        	$("#question1 .input-checkbox").attr('disabled', 'disabled');
	        	$("#question1 .input-checkbox:checked").removeAttr('disabled');
	    	} else {
	    		$("#question1 .input-checkbox").removeAttr('disabled', 'disabled');
	    	}
		});
	}

	function init() {
		currentQuestionId++;
		$('#question0').fadeOut();
		$('#question1').fadeIn();
		buildCountriesList('checkbox');
		checkboxLimit();
	}

	function placeImage() {
		if (currentQuestionId > 3 && currentQuestionId < 9) {
			$rootImage.css('background-image', 'url(https://s2.stc.all.kpcdn.net/best/widgets/olimp/test-1/images/question' + currentQuestionId + '.jpg)');
			$rootImage.addClass('active');
		}
	}

	function addResult() {
		var value = '';
		var firstValue = '';
		var obj = {};
		var $resultInputs = $('#question' + currentQuestionId).find('input:checked');
		var questionItem = questionText[currentQuestionId - 1];
		if (currentQuestionId == 1) {
			$resultInputs.each(function(index){
				resultArr.push($(this).val());
				firstValue += $(this).val();
				if (index === 0) {
					firstValue += ' - ';
				}
			});
			obj[questionItem] = firstValue;
			resultForCanvas.push(obj);

		} else {
			$resultInputs.each(function(){
				value += $(this).val();
				obj[questionItem] = value;
			});

			resultArr.push(value);
			resultForCanvas.push(obj);
		}
	}

	function buildCountriesList(type) {
		var html = '';

		for(i=0; i < countriesList.length; i++) {
			html+= '<label class="label"><input type="' + type + '" class="input-checkbox custom-input" name="country_name" value="' + countriesList[i].name + '"><span class="flag" style="background-image: url(https://s2.stc.all.kpcdn.net/best/widgets/olimp/test-1/images/strany/' + countriesList[i].pic + '.png)"></span><span class="country-name">' + countriesList[i].name + '</span></label>';
		}

		$('#question' + currentQuestionId + ' .answerbox').html(html);
	}


	function scrollToTop() {
		$rootDiv.animate({scrollTop: 0});
	}

	function loadResultPage() {
		//var queryStr = $.param(resultObj);
		//window.location = 'result?' + queryStr;
		$rootDiv.addClass('loading');
		$('#content').load('result.html', function(){
			var $resultValues = $('.result-value');
			
			toFinish();

			$resultValues.each(function(index){
				$(this).html(resultArr[index]);
			});
		});

	}

	function buildQuestion() {
		var isValidAnswer = isValid();

		if(isValidAnswer) {
			$rootError.fadeOut();
			addResult();

			$('#question' + currentQuestionId).fadeOut("fast");
			currentQuestionId++;

			if (currentQuestionId > 8) {
				loadResultPage();
			}  else {
				$('#question' + currentQuestionId).fadeIn("fast");

				if (currentQuestionId === 2 || currentQuestionId === 3) {
					buildCountriesList('radio');
				}
			}

			checkWpHeight();
			scrollToTop();
			placeImage();
		}

	}

	$startBtn.on('click', init);
	$nextBtn.on('click', buildQuestion);
	$('.clearButton').on('click', function(){
		window.location = 'https://' + window.location.hostname + window.location.pathname;
	});

	checkWpHeight();
	$(window).on('resize', checkWpHeight);


	var make_url_by_path = function (id, path/*, name*/) {
	    id = String(id);
	    //name = name || '/inx600x400.jpg';

	    var domains = /share\/i/i.test(path)
	        ? ['s9', 's10', 's11', 's12', 's13', 's14', 's15', 's16']
	        : ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
	    var domain = domains[parseInt(md5(id).substring(0, 1), 16) % domains.length];

	    return '//' + domain + '.stc.all.kpcdn.net' + path;
	};

	var uploadTryCount = {};
	function upload(file, rnd, cb) {
	    const _url = location.protocol + "//kp.ru/catcher/api/1/files/upload";
	    rnd = rnd || Math.trunc(Math.random() * 100000);
	    if (!uploadTryCount[rnd]) {
	        uploadTryCount[rnd] = 1
	    }

	    const xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function () {
	        if (this.readyState === 4) {
	            if (xhr.status === 200) {
	                const resp = JSON.parse(xhr.responseText);
	                if (['image/jpeg', 'image/pjpeg', 'image/png'].indexOf(resp[rnd].content_type) === -1) {
	                    return cb('ÐÐµÐ¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÐ¼Ñ‹Ð¹ Ñ‚Ð¸Ð¿ Ñ„Ð°Ð¹Ð»Ð°: ' + resp[rnd].content_type);
	                }
	                if (!resp[rnd]) {
	                    if (uploadTryCount[rnd] < 3) {
	                        uploadTryCount[rnd] += 1;
	                        return upload(file, rnd, cb);
	                    }
	                    return cb('Ð¤Ð°Ð¹Ð» Ð½Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÐµÑ‰Ðµ Ñ€Ð°Ð·');
	                }
	                const imageUrl = "/share/i/" + resp[rnd].catcher + "/" + resp[rnd].md5;
	                const src = make_url_by_path(resp[rnd].md5, imageUrl);
	                const img = document.createElement('img');
	                img.style.width = '1px';
	                img.style.height = '1px';
	                img.style.position = 'absolute';
	                img.style.left = '-9999px';
	                img.src = src;
	                img.onerror = function (event) {
	                    if (event.type === 'error') {
	                        if (uploadTryCount[rnd] < 3) {
	                            uploadTryCount[rnd] += 1;
	                            return upload(file, rnd, cb);
	                        }
	                        return cb('Ð¤Ð°Ð¹Ð» Ð½Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÐµÑ‰Ðµ Ñ€Ð°Ð·');
	                    }
	                    cb(null, imageUrl, src, resp[rnd]);
	                };
	                img.onload = function () {
	                    uploadTryCount[rnd] = 0;
	                    cb(null, imageUrl, src, resp[rnd]);
	                };
	                document.body.appendChild(img);
	            }
	            else {
	                cb('ÐŸÑ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÐµÑ‰Ðµ Ñ€Ð°Ð·');
	            }
	        }
	    };

	    xhr.open('POST', _url, true);
	    const data = new FormData();
	    data.append('files.' + rnd, file);
	    xhr.send(data);
	}

	function wrapText(context, text, x, y, maxWidth, lineHeight, isUpper) {
		var linesCount = 1;
		if (isUpper) {
			text = text.toUpperCase();
		}
    	var words = text.split(' ');
    	var line = '';

    	for(var n = 0; n < words.length; n++) {
      		var testLine = line + words[n] + ' ';
      		var metrics = context.measureText(testLine);
      		var testWidth = metrics.width;
      		if (testWidth > maxWidth && n > 0) {
        		context.fillText(line, x, y);
        		line = words[n] + ' ';
        		y += lineHeight;
        		linesCount++;
      		}
      		else {
        		line = testLine;
      		}
    	}
    	context.fillText(line, x, y);
    	return {
    		linesCount: linesCount
    	}
  	}

	function toFinish() {
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var img = new Image();

		canvas.setAttribute('width', 767);
		canvas.setAttribute('height', 400);
		canvas.style.position = 'absolute';
		canvas.style.left = '0';
		canvas.style.top = '0';
		canvas.style.opacity = '0';
		document.body.appendChild(canvas);
		
		img.onload = function(){
			ctx.fillStyle = "#1D0001";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0);
			ctx.font = "27px Helvetica";
			ctx.fillStyle = "#fff";
			ctx.textAlign = "center";
			ctx.textBaseline = "top"; 
			ctx.fillText("Ð’ÐÐ¨ ÐŸÐ ÐžÐ“ÐÐžÐ—", canvas.width/2, 15);
			ctx.strokeStyle = "#FEC64F";
			ctx.moveTo((canvas.width/2)-80, 55);
			ctx.lineTo((canvas.width/2)+80, 55);
			ctx.stroke();

			var textHorLeft;
			var textX = 40;
			var textY = 90;
			var textVerSpace = 70;
			var textHorSpace = 370;

			resultForCanvas.forEach(function(item, index){
				let q = Object.keys(item)[0];
				let a = item[q];
				if (index % 2 === 0) {
					textX = 40;
				}
				else {
					textX = 40 + textHorSpace;
				}

				if (index % 2 === 0 && index !== 0) {
					textY += textVerSpace;
				}

				ctx.font = "16px Intro Regular";
				ctx.fillStyle = "#FEC64F";
				ctx.textAlign = "left";
				ctx.textBaseline = "top";
				let textRenderInfo = wrapText(ctx, q, textX, textY, 310, 16, false);

				ctx.font = "17px Helvetica";
				ctx.fillStyle = "#FFF";
				ctx.textAlign = "left";
				ctx.textBaseline = "top"; 				
				wrapText(ctx, a, textX, textY+20*textRenderInfo.linesCount, 310, 17, true);
			});

			canvas.toBlob(function(blob) {
				let img = document.createElement('img');
					let url = URL.createObjectURL(blob);
					img.onload = function() {  						
					// no longer need to read the blob so it's revoked
					URL.revokeObjectURL(url);
					upload(blob, null, function (err, src, CDNSrc, obj) {
		    			let result = {
		    				img: CDNSrc,
		    				res: resultForCanvas.map(function(item){
	    						let q = Object.keys(item)[0];
								let a = item[q];
	    						return [encodeURIComponent(q),encodeURIComponent(a)]
	    					})
    					};
		    			let base64 = Base64.encode(JSON.stringify(result));
	    				location.href = location.origin + location.pathname + '?i=' + base64;
					});
			  	};
			  	img.src = url;
			  	document.body.appendChild(img);
			}, 'image/jpeg', 1);
		};
		img.src = "https://s2.stc.all.kpcdn.net/best/widgets/olimp/test-1/images/bg_olimp.jpg";
	}
});



