<template>
        <div class="background">
        <h1 class="header">WeBlog</h1>
        <img class="img" src="@/static/icon.png">
        <div class="aln">
            <p>Thành viên:</p>
            <form action="">
                <ul>
                    <li class="cr">
                        <img class="img2" src="@/static/minh.jpg">
                        <p>Đặng Diệp Minh</p>
               
                    </li>
                    <li class="cr">
                        <img class="img2" src="@/static/nha.jpg">
                        <p>Nguyễn Thanh Nhã</p>
               
                    </li>
                    <li class="cr">
                        <img class="img2" src="@/static/truong.jpg">
                        <p>Trần Quang Trường</p>
               
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<style scoped>
*{
    background-color: black;
}

.header {
    text-align: center;
    font-size: 80px;
    color: rgb(219, 219, 219);
}

.img {
    margin-left: 43%;
    display: inline-block;
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
    position: relative;
    overflow: hidden;
    height: 200px;
    width: 265px;
}
.img2{
    width: 80px;
    height: 80px;
}
p {
    color: rgb(219, 219, 219);
    font-size: 40px;
}
.cr{
    display: flex;
}
@keyframes turn {
    100% {
      transform: rotateX(0deg);
    }
  }
</style>
