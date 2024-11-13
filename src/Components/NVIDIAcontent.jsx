import React from 'react';
import img1 from '../assets/nv1-content.png';
import img2 from '../assets/gpu-1999-content.png';
import img3 from '../assets/cuda-2006-content.png';
import img4 from '../assets/ai-2012-content.png';
import img5 from '../assets/rtx-2018-content.png';
import img6 from '../assets/omniverse-2022-content.png';


import './NVIDIAcontent.css'

const NVIDIAcontent = () => {
    return (
        <div className ="content" id='2' >
           
            <div className='content-text'>
                <h1>Lịch Sử NVIDIA</h1>
                <p><strong>NVIDA</strong> được thành lập vào năm 1993 tại Santa Clara, California, Hoa Kỳ bởi <strong>Jensen Huang (CEO)</strong> , <strong>Chris Malachowsky</strong> và <strong>Curtis Priem</strong>.</p>
                <p><strong>NVIDA</strong> bắt đầu sản xuất các bộ xử lý đồ họa (GPU) đầu tiên của mình, với sản phẩm nổi bật là NV1, ra mắt vào năm 1995. Sản phẩm này không chỉ hỗ trợ đồ họa 2D mà còn cả 3D, mở ra cơ hội mới cho các ứng dụng đa phương tiện và game.</p>
                <p>Trong suốt những năm 2000, <strong>NVIDIA</strong> tiếp tục khẳng định vị thế của mình trong ngành công nghiệp bằng cách phát triển và giới thiệu nhiều sản phẩm nổi bật. Năm 1999, công ty cho ra mắt <strong>GeForce 256</strong>, bộ xử lý đồ họa đầu tiên được quảng cáo là "<strong>bộ xử lý đồ họa 3D đầu tiên trên thế giới</strong>". Sản phẩm này đã thiết lập tiêu chuẩn mới cho hiệu suất đồ họa và trở thành bước ngoặt trong việc phát triển game.</p>
                <p><strong>NVIDIA</strong> không ngừng đổi mới và phát triển công nghệ, điển hình là việc giới thiệu kiến trúc <strong>CUDA</strong> vào năm 2006, cho phép lập trình viên tận dụng sức mạnh của GPU để thực hiện các tác vụ tính toán phức tạp. Điều này đã mở ra khả năng mới cho các lĩnh vực như khoa học tính toán, trí tuệ nhân tạo và học máy.</p>
                <p>Trong những năm gần đây, <strong>NVIDIA</strong>  đã tiếp tục dẫn đầu với các sản phẩm sử dụng công nghệ tiên tiến như <strong>Ray Tracing</strong> và <strong>AI</strong>, cung cấp hiệu suất đồ họa cao nhất và trải nghiệm chơi game chân thực nhất. Các dòng sản phẩm <strong>GeForce RTX</strong>  mới nhất không chỉ phục vụ cho nhu cầu gaming mà còn đóng góp tích cực vào các lĩnh vực nghiên cứu và phát triển công nghệ mới.</p>
                <p>Từ những ngày đầu khi chỉ là một công ty khởi nghiệp nhỏ, <strong>NVIDIA</strong> đã phát triển thành một trong những tên tuổi hàng đầu trong ngành công nghệ, góp phần định hình tương lai của đồ họa máy tính và trí tuệ nhân tạo. Với tầm nhìn mạnh mẽ và cam kết đổi mới không ngừng, <strong>NVIDIA </strong>sẽ tiếp tục đi đầu trong việc phát triển công nghệ và mang đến những trải nghiệm tuyệt vời cho người dùng trên toàn thế giới.</p>
            </div> 
                <div className="content-img">
                    <div className="content-img1">
                    <img src={img1} alt="" />
                    <p classNames="tittle-img"><strong>NVIDIA NV1 (1995)</strong></p>
                    <p> Công bố vào tháng 5 năm 1995 và phát hành vào tháng 11 năm 1995. Do SGS-Thomson Microelectronics  sản xuất.</p>
                </div>
                <div className ="content-img2">
                    <img src={img2} alt="" />
                    <p className ="tittle-img2"><strong>GPU (1996)</strong></p>
                    <p>NVIDIA đã phát minh ra GPU, bộ xử lý đồ họa, mở đường cho việc định hình lại ngành công nghiệp máy tính.</p>
                </div>
                <div className="content-img3">
                    <img src={img3} alt="" />
                    <p className="tittle-img3"><strong>CUDA (2006)</strong></p>
                    <p>Mở ra khả năng xử lý song song của GPU cho khoa học và nghiên cứu với việc công bố kiến trúc CUDA. </p>
                </div>
                <div className="content-img4">
                    <img src={img4} alt="" />
                    <p className="tittle-img4"><strong>AI (2012)</strong></p>
                    <p>Đánh dấu kỷ nguyên AI hiện đại bằng cách cung cấp năng lượng cho mạng lưới nơ-ron đột phá AlexNet. </p>
                </div>
                <div className="content-img5">
                    <img src={img5} alt="" />
                    <p className="tittle-img5"><strong>RTX (2018)</strong></p>
                    <p>GPU đầu tiền có khả năng dò tia theo thời gian thực (Real-Time Ray Tracing), một công nghệ mang lại những cải tiến đột phá trong đồ họa máy tính. </p>
                </div>
                <div className="content-img6">
                    <img src={img6} alt="" />
                    <p className="tittle-img6"><strong>Omniverse (2022)</strong></p>
                    <p>Omniverse hỗ trợ xây dựng metaverse với các trải nghiệm ảo sống động, giúp các nhà sáng tạo làm việc cùng nhau từ xa trong không gian 3D. </p>
                </div>
            </div>
           
        </div>
    )
};

export default NVIDIAcontent; 