1. envision user management system
为我的实验室做的用户管理系统， 技术寨包括了一个python 后端， 对于vite 前端的维护， mqtt命令 服务器假设与配套esp32固件。 一套relay attack 启用多点id卡认证的设备。还包含了服务器的日常运维。
2. NTPCue Vr eye tracking research
主要负责了vr场景搭建，与用户交互设计， 包括一些流体模拟。 并且给实验室搭建了一套基于slime vr的全身动补系统（因为能够独立于light house使用）方便在实验室环境中随拿随用
3. Uslime vr
因为原版slime vr的重量与平衡问题会导致动补过程中tracker出现过多的抖动，导致不准确的追踪。 这个项目旨在尽量缩小pcb尺寸让tracker 更小更不容易因为自身的重量发生抖动， 设备开发过程中包含了使用logic analyser 去 capture esp32-bno085 之间的i2c communication来最终确定我们的时序电路出现了问题 https://github.com/ReSummit/uSlime
3. NFC business card 与配套的线圈生成器
一个简单的nfc 名片项目。 使用kicad绘制pcb， 并有配套的python 代码，生成按需要的nfc线圈文件与所需要调节谐振频率的电容， 以及线路阻抗计算
4. 兽装眼睛控制（in progress）
使用433mhz遥控器的兽装led眼睛与风扇集成系统。 通过外置的433mhz遥控器来控制 一些预先编辑好的led 灯组运动与风扇变速，也有一个控制小型spi lcd 的变种而非简单控制wb2812变色/流光的


课程项目：
3. 防盗自行车定位器
使用一对bno085 IMU固定在车上，通过检测警戒模式下的异常移动触发报警器 https://sites.google.com/ucsd.edu/ece-196-team-1/home
4. pin ball machine
一个esp32 控制的弹球机 包括了 cad 机械设计， 激光切割应用 3d建模， platform io
5. CV related projects
一些零散的cv相关项目， 机器人图像采集与重新整合（利用imu/激光雷达数据等 重建室内环境地图，recover 环境的360degree 全景影像） ，yolo based 丰年虾识别项目，主要是为了朋友的实验室方便统计丰年虾数量，一些基础的edge detaction/ classification 项目
6. magic 8 ball
一个introductory level的sde项目， 更多只是学习CI/CD pipeline 一个html/javascrypt/css前端加python后端的学习用项目
