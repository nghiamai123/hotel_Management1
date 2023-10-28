const fs = require('fs');

// Đọc nội dung hiện tại của tệp JSON
fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc tệp JSON:', err);
    } else {
        try {
            // Chuyển đổi nội dung JSON thành đối tượng JavaScript
            const json = JSON.parse(data);

            // Thêm thông tin người dùng mới vào mảng users
            const newUser = {
                id: 3,
                name: 'Alice Johnson',
                email: 'alicejohnson@example.com',
                password: 'qwerty'
            };
            json.users.push(newUser);

            // Chuyển đổi đối tượng JavaScript thành định dạng JSON
            const updatedJsonData = JSON.stringify(json);

            // Ghi nội dung JSON đã cập nhật vào tệp users.json
            fs.writeFile('users.json', updatedJsonData, 'utf8', (err) => {
                if (err) {
                    console.error('Lỗi khi ghi tệp JSON:', err);
                } else {
                    console.log('Thông tin người dùng đã được thêm vào tệp JSON thành công.');
                }
            });
        } catch (error) {
            console.error('Lỗi khi phân tích cú pháp tệp JSON:', error);
        }
    }
});