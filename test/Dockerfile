# The image is built on top of one that has node preinstalled
FROM bitnami/node:14 as builder

ENV NODE_ENV="test"

ENV NPM_USER="serhattanrikut"
ENV NPM_PASS="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"
ENV NPM_EMAIL="wodo-platform@users.noreply.github.com"
ENV NPM_REGISTRY="https://npm.pkg.github.com"
ENV NPM_SCOPE="@wodo-platform"



COPY package*.json ./

RUN npm install --only=development

COPY . .


# Only copy the required distribution code to the runner
FROM bitnami/node:14-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app /app

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app

ARG PORT=3000
ENV PORT=${PORT}

EXPOSE ${PORT}

# Start the application
CMD ["npm", "run", "start:prod"]
