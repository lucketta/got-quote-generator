@Profiles = React.createClass
    getInitialState: ->
      profiles: @props.data
    getDefaultProps: ->
      profiles: []
  render: ->
    `<div className="profiles">
      <h2 className="Name"> Profiles </h2>
    </div>`
