FROM ubuntu:22.04

RUN mkdir /workspace
WORKDIR /workspace

# Install system utilities
ENV TZ=America/New_York
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install --yes \
        git \
        sudo \
        curl \
        zsh \
        wget \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash \
    && sudo apt-get install -y nodejs

# Add non-root user
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=${USER_UID}

# Add non-root user and add to sudoers
RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} -s /usr/bin/zsh \
    && echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

# Set code to default git commit editor
RUN git config --system core.editor "code --wait"
# Set Safe Directory
RUN git config --system safe.directory '/workspace'

# Make frontend node_modules
RUN mkdir -p /workspace/node_modules \
    && chown ${USERNAME} /workspace/node_modules
VOLUME /workspace/node_modules

# Configure zsh
USER ${USERNAME}
ENV HOME /home/${USERNAME}

# Add zsh theme with niceties
RUN curl https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh | bash - \
    && sed -i 's/robbyrussell/kennethreitz/g' ~/.zshrc \
    && echo 'export PATH=$PATH:$HOME/.local/bin' >>~/.zshrc

# Expose server port
EXPOSE 3000