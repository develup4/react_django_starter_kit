FROM node:14

WORKDIR /app

COPY project .
RUN yarn install --silent

# yarn build는 평가에 필요한 요소가 아니라서 따로 설정하지 않으셔도 됩니다.
# 단, 수정한다고 해도 포트는 유지해주세요
CMD PORT=18267 yarn start

EXPOSE 18267
