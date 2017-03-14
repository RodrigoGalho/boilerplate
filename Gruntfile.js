module.exports = function(grunt){
	grunt.initConfig({
		cssmin : {
			task:{
				files:{
					'dev/css/style.min.css':['dev/assets/css/style.css']
				}
			}
		}, 
		sass:{
			dist:{
				files:{
					'dev/assets/css/style.css':'dev/assets/sass/*.scss'
				},
				options:{
					debugInfo: false,																									
					sourcemap:'auto'
				}
			}
		},
		watch:{
			scripts:{
				files:['dev/assets/sass/*.scss'],
				tasks: ['sass','cssmin']
			}
		},
		jshint:{
			options:{
				eqnull:true,
				unused:true,
				curly:true,
				plusplus:true,
				strict:true
			},
			files:{
				src:['dev/js/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['cssmin']);
}