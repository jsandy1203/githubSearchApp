<template>
	<div>
		<div>
			<router-link to="/" class="btn btn-light">Back to Search</router-link>
			Hireable:
			<i v-if="userdata.hireable" class="fa fa-check text-success"></i>
			<i v-else class="fa fa-times-c	ircle text-danger"></i>
		</div>
		<div v-if="!loading">
			<div class="card grid-2">
				<div class="all-center">
					<img class="round-img" :src="userdata.avatar_url" alt="img" />
					<h3>{{ userdata.name }}</h3>
					<p>Location: {{ userdata.location }}</p>
				</div>
				<div>
					<h3>Bio</h3>
					<p>{{ userdata.bio }}</p>
					<a :href="userdata.html_url" class="btn btn-dark my-1"
						>Visit GitHub Profile</a
					>
					<ul>
						<li><b>Username: </b> {{ userdata.login }}</li>
						<li><b>Company: </b>{{ userdata.company }}</li>
						<li>
							<b>Website: </b><a :href="userdata.blog">{{ userdata.blog }}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="card text-center">
				<div class="badge badge-primary">
					Followers: {{ userdata.followers }}
				</div>
				<div class="badge badge-success">
					Following: {{ userdata.following }}
				</div>
				<div class="badge badge-light">
					Public Repos: {{ userdata.public_repos }}
				</div>
				<div class="badge badge-dark">
					Public Gists: {{ userdata.public_gists }}
				</div>
			</div>
			<div>
				<Repos />
			</div>
		</div>
		<div v-else>
			<Spinner />
		</div>
	</div>
</template>

<script>
	import Spinner from './Spinner';
	import Repos from '../repos/Repos';
	import { mapGetters, mapActions } from 'vuex';
	export default {
		props: ['login'],
		components: {
			Spinner,
			Repos,
		},
		methods: {
			...mapActions(['userDetails', 'userRepos']),
		},
		computed: mapGetters(['userdata', 'loading', 'getrepos']),
		mounted() {
			this.userDetails(this.login);
			this.userRepos(this.login);
			console.log(1234);
		},
	};
</script>

<style scoped>
	img {
		width: 150px;
	}
</style>
