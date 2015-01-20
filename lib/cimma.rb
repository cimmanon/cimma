require 'compass'
#require 'translucencss'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('cimma', :path => extension_path)
