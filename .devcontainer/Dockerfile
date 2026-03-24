FROM debian:trixie

RUN apt-get update && apt-get install -y \
	unzip \
	sudo \
	git \
	build-essential \
	bash-completion \
	curl \
	ca-certificates \
	nodejs \
	npm \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*

ARG USERNAME=dc
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
	&& useradd --uid $USER_UID --gid $USER_GID -m -s /bin/bash $USERNAME \
	&& echo "$USERNAME ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
	&& chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME
WORKDIR /workspace

RUN curl -fsSL https://deno.land/install.sh | sh
ENV PATH="/home/dc/.deno/bin:${PATH}"

CMD ["/bin/bash"]