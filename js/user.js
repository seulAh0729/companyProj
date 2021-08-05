// 테이블에 특정열 내부 정렬하기
$('.table tr').each(function(a, b) {
    // console.log(a);
    if (a >= 2) {
        $(this).find('td').each(function(c, d) {
            if (c >= 8 || c == 3 || c == 4 || c == 1) {
                $(this).addClass('CENTER');
            } else if (c == 5 || c == 6 || c == 7 || c == 0) {
                $(this).addClass('RIGHT');
            }
        });
    }
});

// table 내부에 td생성하기
var table_count = $('.table').length - 1;
var td_count = $('.table tr td').length;
var table_text = "";
for (var i = 1; i <= 20; i++) {
    table_text += "<tr>";
    for (var j = 1; j <= 11; j++) {
        if (j % 11 == 1) {
            table_text += '<td>' + i + '</td>';
        } else {
            table_text += '<td></td>';
        }
    }
    table_text += "</tr>";
}

$(table_text).appendTo($('.table'));

$('.table tr').each(function(i) {
    $(this).find('td').each(function(j) {
        if (j == 0) {
            $(this).css('text-align', 'right');
        }
    });
});

// table복사
for (var k = 1; k <= 8; k++) {

    $('.pagenation').before($('.table').eq(0).clone());
}
for (var i = 1; i <= 8; i++) {
    $('.table').eq(i).find('tr').eq(2).find('td').eq(0).html(i * 2);
}
var jj = 1;
$('.table').each(function(i) {
    $(this).find('tr').each(function(c) {
        if (c >= 2) {
            $(this).find('td').first().html(jj++);
        }
    });

});

// table에 id 자동설정하기
function setId() {
    $('.table').each(function(index) {
        $(this).attr('id', 'table' + index);
    });
}
// table복사

$('.excel_dn').attr('onclick', "fnExcelReport('table0','title')");
setId();
// paging
$('.table').hide();
$('.table').eq(0).show();
var TABLE = $('.table');
LI = $('ul.pagenation>li.page');
LI.on('click', function() {
    var i = $('ul.pagenation>li.page').index(this);
    table_show(i);
    $('ul.pagenation>li.page').find('a').removeClass('active');
    $(this).find('a').addClass('active');
    page = i;
    excelReport(page);
});

// 엑셀로 변환해주는 함수 : 2003버젼
function excelReport(page) {
    var text = "fnExcelReport('table" + page + "','title')";
    $('.excel_dn').attr('onclick', text);
}

$('.prev').click(function() {
    page--;
    table_show(page);
    $('ul.pagenation>li.page').find('a').removeClass('active');
    $('ul.pagenation>li.page').eq(page).find('a').addClass('active');
});
$('.next').click(function() {
    page++;
    table_show(page);
    page_active(page)
});

function table_show(i) {
    TABLE.hide();
    TABLE.eq(i).show();
}

function page_active(page) {
    $('ul.pagenation>li.page').find('a').removeClass('active');
    $('ul.pagenation>li.page').eq(page).find('a').addClass('active');
}


$('.last').on('click', function() {
    var table_count = $('.table').length - 1;
    TABLE.hide();
    TABLE.last().show();
    page_active(table_count);
    excelReport(table_count);
    page = table_count;
});

$('.first').click(function() {
    TABLE.hide();
    TABLE.first().show();
    page_active(0);
    excelReport(0);
    page = 0;
});