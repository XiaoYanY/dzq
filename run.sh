#!/bin/sh
START_TIME=`cat /bdate.log`
endtime=`date +'%Y-%m-%d %H:%M:%S'`
END_TIME=$(date +%s)
ELAPSED_TIME=$((END_TIME - START_TIME))
s_to_minute=60
RUN_MINUTE=`echo "scale=2; $ELAPSED_TIME/$s_to_minute" | bc`
echo "Runtime: $ELAPSED_TIME seconds"
echo "Runtime: $RUN_MINUTE minute"
curl 'https://oapi.dingtalk.com/robot/send?access_token=2c46efde8e65e0c16baf32aa08805f3589ae6849ed2fb02622df1aeacbb3e515' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text", 
        "text": {
             "content": "'${APP_NAME}:${APP_ENV}'项目启动成功，时间:${ELAPSED_TIME}s"
        }
      }'
exec "$@"
