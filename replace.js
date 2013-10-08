$(function(){
    var replace_list = [
        ['Miss.', 'Ms.'],
        ['Mrs.', 'Ms.'],
        ['Black', 'African American'],
        ['Indian', 'Native American'],
        ['メリー・クリスマス', 'ハッピー・ホリデーズ'],
        ['man', 'person'],
        ['マン', 'パーソン'],
        ['婦', '師'],
        ['士', '師'],
        ['害', 'がい'],
        ['保母', '保育士'],
        ['スチュワーデス', '客室乗務員'],
        ['スチュワード', '客室乗務員'],
        ['土人', '先住民'],
        ['トルコ風呂', 'ソープランド'],
        ['肌色', 'ペールオレンジ'],
        ['ブラインドタッチ', 'タッチタイピング'],
        ['君', 'さん'],
        ['痴呆症', '認知症'],
        ['精神分裂病', '統合失調症'],
        ['らい病', 'ハンセン病'],
        ['癩病', 'ハンセン病'],
        ['アシナシゲンゲ', 'ヤワラゲンゲ'],
        ['イザリウオ', 'カエルアンコウ'],
        ['オシザメ', 'チヒロザメ'],
        ['セムシウナギ', 'ヤバネウナギ'],
        ['バカジャコ', 'リュウキュウキビナゴ'],
        ['ミツクチゲンゲ', 'ウサゲンゲ'],
        ['メクラウナギ', 'ヌタウナギ'],
        ['痴漢', '痴士'],
        ['痴女', '痴士'],
        ['悪漢', '悪士'],
        ['悪女', '悪士'],
        ['AV女優', 'セクシャル・アクター'],
        ['娼師', 'セクシャル・セラピスト'],
        ['慰安師', 'セクシャル・セラピスト'],
        ['裏日本', '日本海側'],
        ['部落', '被差別集落'],
    ];

    function replace() {
        var textnodes = $("*").contents().filter(function() {return this.nodeType === 3; });
        for (var i=0; i<textnodes.length; i++) {
            for (var j=0; j<replace_list.length; j++)
                textnodes[i].textContent = textnodes[i].textContent.split(replace_list[j][0]).join(replace_list[j][1]);
        }
    }

    replace();

    var timer = 0;
    document.addEventListener('DOMNodeInserted', function() {
            if(timer) return;
            timer = setTimeout(function() {
                replace();
                timer = 0;
            }, 100);
        }, false);

});
