## Simple React JS Application

## render html using reactDOM - ex: index.html
- ReactDOM.render(
    "<div>my html content </div>", 
    document.getElementById('container'));


## render html from a component - ex: component.html, multiplecomponent.html
 
 - create a component 
    -  using React.createclas
    -  implement the render function - NOTE - Only one element can be returned as part of a component. we can return one parent DIV containing multiple component
    -  return the html
 - use the component as html to the ReactDOM.render

    ex: 
        var MyComponent = React.createClass({
                    render: function() {
                        return (<h2>Rendered from a component</h2>);
                    }
                });
                ReactDOM.render(<MyComponent />, document.getElementById('container'));

        ex: Multiple component
                ReactDOM.render(<div><MyComponent /><MyComponent /></div>, document.getElementById('container'));

## Properties - ex: props.html

- can create a template & allows to customize a component
- properties are for rest of its life
- while rendering the component a property passed from ReactDOM.render can be used using "{this.props.propertyName}"
- ex:
    var MyComponent = React.createClass{{
        render:function(){
            return{
                <div> {this.props.title} </div>
            };
        }
    }};
    ReactDOM.render(
        <MyComponent title="Avatar" />,
        document.getElementById("container")
    );

## events - ex: events.html

-  ex to handle an add/delete action 
        var Comment = React.createClass({
            edit: function(){
                alert("Editing comment");
            },
            remove: function(){
                alert("Removing comment");
            },
            render: function(){
                return(
                    <div>
                            <div>{this.props.children}
                                <button onClick={this.edit}>Edit</button>
                                <button onClick={this.remove}>Remove</button>
                            </div>
                    </div>
                );
            }
        });


## State - 
- properties are for rest of its life. but when we want to change based on an action 
- ex: checkbox click change a text content
            // set the initial state
    -       getInitialState: function(){
                return {checked: true}
            },

            //handle on change of check box and negate the previous state
            handleChecked: function(){
                this.setState({checked: !this.state.checked})
            },
            
            render: function(){
                // display message variable
                var msg;
                if(this.state.checked){
                    msg = "checked"
                }
                else{
                    msg = "unchecked"
                }
                return(
                    <div>
                        <input type="checkbox" onChange="{this.handleChecked}" defaultChecked="{this.state.checked}"  />
                        <h3>Checkbox is {msg}</h3>
                    </div>
                );
            }


        
## Reference

- Thanks Bucky for providing this awesome step by step video
    - https://www.youtube.com/watch?v=-AbaV3nrw6E&index=1&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA