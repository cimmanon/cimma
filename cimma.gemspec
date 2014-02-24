Gem::Specification.new do |s|
  # Release Specific Information
  s.version = "0.1.2"
  s.date = "2012-10-30"

  # Gem Details
  s.name = "cimma"
  s.authors = ["Chris Siepker"]
  s.summary = %q{Cimma:  a Compass Boilerplate Library}
  s.description = %q{Cimma is an attractive collection of baseline CSS styles, somewhere between Normalize and Twitter Bootstrap}
  s.email = "chris@cimmanon.org"
  s.homepage = "http://www.cimmanon.org/"

  # Gem Files
#  s.files = %w(README.txt)
  s.files = Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")
  s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.rubygems_version = %q{1.3.6}
  s.add_dependency("compass", [">= 0.11"])
  s.add_dependency("translucencss", [">= 0.1.1"])
  s.add_dependency("modular-scale", [">= 1.0"])
end