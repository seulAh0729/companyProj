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
var table_count = $('.table').length - 1;

// table에 id 자동설정하기
function setId() {
    $('.table').each(function(index) {
        $(this).attr('id', 'table' + index);
    });
}
// table복사
$($('.table').eq(table_count)).after($('.table').eq(3).clone());
$($('.table').eq(table_count)).after($('.table').eq(2).clone());
$($('.table').eq(table_count)).after($('.table').eq(1).clone());
setId();
var jj = 1;
$('.table').each(function(i) {
    $(this).find('tr').each(function(c) {
        if (c >= 2) {
            $(this).find('td').first().html(jj++);
        }
    });

});

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

    // var text = "fnExcelReport('table" + a + "','title')";
    // $('.excel_dn').attr('onclick', text);

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
$('.excel_dn').attr('onclick', "fnExcelReport('table1','title')");

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