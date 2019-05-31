 $(function(){
    var $description = $('.topics-description');    //文章のjQueryオブジェクトの保存
    $description.each(function(){
        var textSplit = '';                         //空の文字列
        var text = this.innerText;                  //DOMオブジェクトのテキストの取得
        var textBox = $(this);
        if(text.length > 50){                       //判定
            text = text.split('');                  //文字列の分裂
            for(var i = 0;i < 50;i++){
                textSplit = textSplit + text[i];    //文字列の結合
            }
            textSplit = textSplit + '...';          //文字列の末尾に'...'の結合
            textBox.html(textSplit);                //HTMLのテキスト部分に上書き
        }
    });
});