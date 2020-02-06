<template>
  <div>
    <v-container>
      <v-content>
        <v-col xl="11" lg="11" md="11" sm="11" xs="11">
          <div style="font-size: 28px; font-weight: 500;letter-spacing: 1px; margin-top: 10px">西南大学助手</div>
          <hr style="margin-top: 10px; margin-bottom: 14px">
          <div style="font-size: 16px; font-weight: 500; letter-spacing: 1px">
            欢迎使用<span style="color: #188FFF; font-weight: 600">西南大学助手</span>！<br><br>
            github地址:
            <a
                    href="https://github.com/aowubulao/swu-tools-web/"
                    style="color: #188FFF; margin-left: 10px" target="_blank">
              aowubulao/swu-tools-web/
            </a>
            <br><br>
            该应用提供教务系统信息查询等功能。<br><br>
            所有查询都是<span style="color: #188FFF; font-weight: 600">一次性</span>的，不会将信息存入数据库保存，请放心使用。
          </div>
          <br><br>
          <div style="font-size: 28px; font-weight: 500;letter-spacing: 1px; margin-top: 10px">功能</div>
          <hr style="margin-top: 10px; margin-bottom: 14px">
          <div style="font-size: 16px; font-weight: 500; letter-spacing: 1px">
            <ul>
              <li style="margin-top: 2px">成绩查询</li>
              <li style="margin-top: 2px">水电费余额查询</li>
              <li style="margin-top: 2px">课表查询输出</li>
            </ul>
          </div>
        </v-col>
      </v-content>
    </v-container>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation";

  export default {
    components: {
      Navigation,
    },
    data: () => ({

    }),
  }
</script>

<style>

</style>
