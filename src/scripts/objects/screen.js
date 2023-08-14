const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😕'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😕'}</p>
                                            <div class="follow">
                                                <p class="followers">Seguidores: ${user.numberFollowers}</p>
                                                <p class="following">Seguindo: ${user.numberFollowing}</p>
                                            </div>
                                        </div>
                                      </div>`;
        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                        <div class="info-repositories">
                                            <p><i class="fas fa-code-branch"></i> ${repo.forks ?? 0}</p>
                                            <p><i class="fas fa-star" style="color: #e9fa00;"></i> ${repo.stargazers_count ?? 0}</p>
                                            <p><i class="far fa-eye"></i> ${repo.watchers ?? 0}</p>
                                            <p class="language"><i class="fas fa-laptop-code"></i> ${repo.language ?? 'Linguagem não especificada'}</p>
                                        </div>
                                    </a>
                                  </li>`
        });
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        };
        let eventsItens = '';
        user.events.forEach(element => {
            if (element.type === 'PushEvent') {
                eventsItens += `<li>
                                    <h3>${element.repo.name}</h3>
                                    <p> -- ${element.payload.commits[0].message}</p>
                                </li>`
            } else {
                eventsItens += `<li>
                                    <h3>${element.repo.name}</h3>
                                    <p> -- Criado um ${element.payload.ref_type}</p>
                                </li>`
            };
        });
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        };
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado 😵‍💫</h3>"
    }
}
export { screen };