function toHex(text){
	var bytes1 = toUTF8bytes(text);
	var hex_str1 = toHexString(bytes1);
	return hex_str1;
}

// 文字列をUTF8のバイト配列に変換
function toUTF8bytes(text){
    var result = [];
    if (text == null)
        return result;
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c <= 0x7f) {
            result.push(c);
        } else if (c <= 0x07ff) {
            result.push(((c >> 6) & 0x1F) | 0xC0);
            result.push((c & 0x3F) | 0x80);
        } else {
            result.push(((c >> 12) & 0x0F) | 0xE0);
            result.push(((c >> 6) & 0x3F) | 0x80);
            result.push((c & 0x3F) | 0x80);
        }
    }
    return result;
}

// バイト値を16進文字列に変換
function byteToHex(byte_num){
	var digits = (byte_num).toString(16);
    if (byte_num < 16) return '0' + digits;
    return digits;
}

// バイト配列を16進文字列に変換
function toHexString(bytes){
	var	result = "";

	for (var i = 0; i < bytes.length; i++) {
		result += byteToHex(bytes[i]);
	}
	return result;
} 