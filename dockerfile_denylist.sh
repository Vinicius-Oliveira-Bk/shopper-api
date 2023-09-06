DOCKERFILE_BACKEND="$(cat ./app/backend/Dockerfile)"
DOCKERFILE_FRONTEND="$(cat ./app/frontend/Dockerfile)"

DENY=(
  "RUN npm start"
)

echo "--------------------------"
echo '-app/backend/Dockerfile---'
echo "--------------------------"
echo "$DOCKERFILE_BACKEND"
echo "--------------------------"
echo '-app/frontend/Dockerfile--'
echo "--------------------------"
echo "$DOCKERFILE_FRONTEND"
echo "--------------------------"
echo "--------------------------"

error=0